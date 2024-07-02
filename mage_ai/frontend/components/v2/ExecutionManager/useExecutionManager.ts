import EventStreamType, {
  ProcessDetailsType,
  ServerConnectionStatusType,
  EventStreamResponseType,
  EventSourceReadyState,
  ReadyStateToServerConnectionStatus,
} from '@interfaces/EventStreamType';
import { APIErrorType } from '@context/APIMutation/Context';
import { DEBUG } from '../utils/debug';
import { ResponseType, MutationFetchArgumentsType } from '@api/interfaces';
import { closeConnection } from './utils';
import { getEventStreamsUrl } from '@api/utils/url';
import { getNewUUID } from '@utils/string';
import { useMutate } from '@context/APIMutation';
import { useRef } from 'react';
import { ConsumerOperations as ConsumerOperationsT, EventSourceHandlers as EventSourceHandlersT, ExecutionManagerType } from './interfaces';

export type ConsumerOperations = ConsumerOperationsT;
export type EventSourceHandlers = EventSourceHandlersT;

const MAX_OPEN_CONNECTIONS = 6;
type QueueFunction = (opts?: EventSourceHandlers) => void;
type ConsumerMapping = Record<string, {
  options: EventSourceHandlers;
}>;
type StreamMapping = Record<string, {
  consumers: ConsumerMapping;
  errors: Event[];
  events: EventStreamType[];
  messages: Record<string, ProcessDetailsType>;
  options: EventSourceHandlers;
  status?: ServerConnectionStatusType;
}>;
type ChannelMapping = Record<string, {
  options: EventSourceHandlers;
  streams: StreamMapping;
}>;

function debugLog(message: any, ...args: any[]) {
  const arr = [`[CodeExecutionManager] ${message}`];
  if (Array.isArray(args) && args.length > 0) {
    arr.push(...args);
  }
  DEBUG.codeExecution.manager && console.log(...arr);
}

export default function useExecutionManager({
  autoReconnect,
  maxConnectionAttempts,
  throttle,
}: {
  autoReconnect?: boolean;
  maxConnectionAttempts?: number;
  throttle?: number;
} = {
    autoReconnect: true,
    maxConnectionAttempts: 10,
    throttle: 1000,
  },
): ExecutionManagerType {
  // Setup
  const chancesLeft = useRef<Record<string, number>>({});
  const timeoutsRef = useRef<Record<string, any>>({});

  // Callbacks
  const onerrorRef = useRef<(event: Event) => void>(null);
  const onmessageRef = useRef<(event: EventStreamResponseType) => void>(null);
  const onopenRef = useRef<(event: Event) => void>(null);

  // Connections
  const eventSourcesRef = useRef<Record<string, EventSource>>({});
  const connectionQueueRef = useRef<QueueFunction[]>([]);
  const queueProcessingTimeoutRef = useRef(null);
  const recentConnectionProcessedTimestampRef = useRef<number>(null);

  // Event data
  const channelsRef = useRef<ChannelMapping>({});
  // const executionsRef = useRef<ProcessDetailsType[]>([]);

  // API
  const responseErrorsRef = useRef<APIErrorType[]>([]);

  const mutants = useMutate({ resource: 'code_executions' }, {
    disableAbort: true,
    handlers: {
      create: {
        onError: (error: APIErrorType, args?: MutationFetchArgumentsType) => {
          debugLog('mutants.onError', [error, args]);
          responseErrorsRef.current.push(error);
        },
        onSuccess: (result: ProcessDetailsType, variables?: any) => {
          debugLog('mutants.create.onSuccess', [result, variables]);
          // executionsRef.current.push(result as ProcessDetailsType);
        },
      },
    },
  });

  function processQueue() {
    debugLog('processQueue', connectionQueueRef.current.length, throttle, queueProcessingTimeoutRef.current);
    if (connectionQueueRef.current.length === 0) {
      clearTimeout(queueProcessingTimeoutRef.current);
      queueProcessingTimeoutRef.current = null;
      return;
    }

    if (getOpenConnections()?.length >= MAX_OPEN_CONNECTIONS) {
      debugLog(`Max open connections reached: ${getOpenConnections()?.length} of ${MAX_OPEN_CONNECTIONS}`);
      debugLog(`Emptying ${connectionQueueRef.current.length} connection requests from the queue.`);
      connectionQueueRef.current = [];
      return;
    }

    const connect = connectionQueueRef.current.shift();
    connect();
    recentConnectionProcessedTimestampRef.current = Number(new Date());
  }

  function registerStream(channel: string, stream: string, options?: EventSourceHandlers) {
    channelsRef.current[channel] ||= {
      options,
      streams: {},
    };
    channelsRef.current[channel].options = options;

    channelsRef.current[channel].streams[stream] ||= {
      consumers: {},
      errors: [],
      events: [],
      messages: {},
      options,
      status: null,
    };
    channelsRef.current[channel].streams[stream].options = options;

    const connect = (opts?: EventSourceHandlers) => {
      const handle = (optsInternal: EventSourceHandlers) => {
        const {
          onError,
          onOpen,
        } = { ...opts, ...optsInternal };

        onopenRef.current = (event: Event) => {
          DEBUG.codeExecution.manager && debugLog('useEventStreams.onopen', eventSource, event);

          const status = ServerConnectionStatusType.OPEN;
          // setStatus(channel, stream, status);
          onOpen && onOpen?.(status, event);
        };

        onerrorRef.current = (error: Event) => {
          console.error(
            `EventSource for channel ${channel} and stream ${stream} failed with error`, error);

          closeEventSourceConnection(channel);
          onError && onError?.(error);

          if (!autoReconnect) return;

          // setStatus(channel, stream, ServerConnectionStatusType.RECONNECTING);

          chancesLeft.current[channel] ||= maxConnectionAttempts;
          chancesLeft.current[channel] -= 1;
          const chances = chancesLeft.current[channel];
          if (chances <= 0) return;

          clearTimeout(timeoutsRef?.current?.[channel]);
          timeoutsRef.current[channel] = setTimeout(
            () => {
              debugLog(`Reconnecting to server with ${chances} attempt(s) remaining...`);
              connectEventSource(channel, stream);
            },
            1000 * (maxConnectionAttempts - chances + 1),
          );
        };

        chancesLeft.current[channel] = chancesLeft.current[channel] ?? maxConnectionAttempts;
        connectEventSource(channel, stream);
        const eventSource = getEventSource(channel, stream);
        if (!eventSource) {
          return connect();
        }

        return getEventSource(channel, stream);
      }

      const handleNext = () => {
        const elapsed = Number(new Date()) - (recentConnectionProcessedTimestampRef.current ?? 0);
        queueProcessingTimeoutRef.current = setTimeout(processQueue, Math.max(throttle - elapsed, 0));
      };

      connectionQueueRef.current.push(() => handle({
        onError: (error: Event) => {
          handleNext()
          if (opts?.onError) {
            opts?.onError?.(error);
          }
        },
        onOpen: (status: ServerConnectionStatusType, event: Event) => {
          handleNext()
          if (opts?.onOpen) {
            opts?.onOpen?.(status, event);
          }
        },
      }));

      if (!queueProcessingTimeoutRef.current) {
        queueProcessingTimeoutRef.current = setTimeout(
          processQueue, connectionQueueRef.current.length === 1 ? 0 : throttle);
      }
    }

    // Max of 6 connections.
    // Use the same connection but different streams to receive events specific for that strem.

    if (channel in eventSourcesRef.current && stream in channelsRef.current[channel].streams) {
      false &&
        debugLog(`Connection already exists for channel ${channel} and stream ${stream} is already registered.`);
      return;
    } else if (getOpenConnections().length >= MAX_OPEN_CONNECTIONS) {
      debugLog(`Max open connections reached: ${getOpenConnections()?.length} of ${MAX_OPEN_CONNECTIONS}`);
      return;
    }

    connect();
  }

  function addToStream(channel: string, stream: string, args: {
    error?: Event;
    event?: EventStreamType;
    message?: ProcessDetailsType;
    status?: ServerConnectionStatusType;
  }) {
    if (!(channel in channelsRef.current) || !(stream in channelsRef.current[channel].streams)) {
      return;
    }

    const { error, event, message, status } = args ?? {};

    if (error) {
      channelsRef.current[channel].streams[stream].errors.push(error);
    }
    if (event) {
      channelsRef.current[channel].streams[stream].events.push(event);
    }
    if (message) {
      channelsRef.current[channel].streams[stream].messages[message.message_uuid] = message;
    }
    if (status) {
      channelsRef.current[channel].streams[stream].status = status;
    }
  }

  function useRegistration(channel: string, stream: string): {
    subscribe: (consumer: string, handlers: EventSourceHandlers) => void;
    unsubscribe: (consumer: string) => void;
  } {

    const subscribe = (consumer: string, options: EventSourceHandlers) => {
      if (!(channel in channelsRef.current) || !(stream in channelsRef.current[channel])) {
        registerStream(channel, stream, {
          ...options,
          onOpen: (status: ServerConnectionStatusType, event: Event) => {
            channelsRef.current[channel].streams[stream].consumers[consumer] = { options };

            if (options?.onOpen) {
              options?.onOpen?.(status, event);
            }
          }
        });
      }

      channelsRef.current[channel].streams[stream].consumers[consumer] = { options };
    };

    const unsubscribe = (consumer: string) => {
      delete channelsRef?.current?.[channel]?.streams?.[stream]?.consumers?.[consumer];
    };

    return {
      subscribe,
      unsubscribe,
    };
  }

  // To send messages and receive them by a subset of consumers, be sure to pass in:
  // source: where it originated from
  // stream: a grouping under channel but all within the same connection
  // message_request_uuid: a unique identifier for the message; this is kept consistent throughout the code execution lifecycle.
  function useExecuteCode(channel: string, stream?: string): {
    executeCode: (message: string, payload?: {
      message_request_uuid?: string;
      source?: string;
    }) => void;
    messageRequestUUID: string;
  } {
    // const eventSource = eventSourcesRef.current[channel];
    const messageRequestUUID = getNewUUID();

    const executeCode = (message: string, payload?: {
      message_request_uuid?: string;
      source?: string;
    }) => mutants.create.mutate({
      onError: (response: ResponseType) => {
        debugLog('[RUNTIME] onError', response);
      },
      onSuccess: (data: { code_execution: ProcessDetailsType }) => {
        debugLog('[RUNTIME] onSuccess', data);
        addToStream(channel, stream, { message: data.code_execution as ProcessDetailsType });
      },
      payload: {
        message,
        message_request_uuid: payload?.message_request_uuid ?? messageRequestUUID,
        source: payload?.source,
        stream,
        timestamp: Number(new Date()),
        uuid: channel, // This cannot change or no messages will be received
      } as ProcessDetailsType,
    });

    return {
      executeCode,
      messageRequestUUID,
    };
  }

  function handleOnMessage(event: EventStreamResponseType, channel: string, stream: string) {
    onmessageRef?.current && onmessageRef?.current?.(event);

    const eventData = JSON.parse(event.data);

    DEBUG.codeExecution.manager && debugLog('useEventStreams.onmessage', event, eventData);
    // setEvents(channel, stream, eventData);

    channelsRef?.current?.[channel]?.streams[stream]?.options?.onMessage?.(eventData);

    const consumers = channelsRef?.current?.[channel]?.streams[stream]?.consumers;

    Object.values(consumers ?? {}).forEach(({ options }) => {
      options?.onMessage?.(eventData);
    });
  }

  function handleOnOpen(event: Event, channel: string, stream: string) {
    onopenRef?.current && onopenRef?.current?.(event);

    const eventSource = getEventSource(channel, stream);
    const status = ReadyStateToServerConnectionStatus[eventSource.readyState];

    DEBUG.codeExecution.manager && debugLog('useEventStreams.onopen', event);
    // setStatus(channel, stream, status);

    channelsRef?.current?.[channel]?.streams[stream]?.options?.onOpen?.(
      status,
      event,
    );

    const consumers = channelsRef?.current?.[channel]?.streams[stream]?.consumers;
    Object.values(consumers ?? {}).forEach(({ options }) => {
      options?.onOpen?.(
        status,
        event,
      );
    });
  }

  function handleOnError(event: Event, channel: string, stream: string) {
    onerrorRef?.current && onerrorRef?.current?.(event);

    DEBUG.codeExecution.manager && debugLog('useEventStreams.onerror', event);
    // setErrors(channel, stream, event);

    channelsRef?.current?.[channel]?.streams[stream]?.options?.onError?.(event);

    const consumers = channelsRef?.current?.[channel]?.streams[stream]?.consumers;
    Object.values(consumers ?? {}).forEach(({ options }) => {
      options?.onError?.(event);
    });
  }

  function connectEventSource(channel: string, stream: string): EventSource | null {
    let eventSource = getEventSource(channel, stream)
    if (eventSource) {
      if (EventSourceReadyState.OPEN === eventSource.readyState) {
        // setStatus(channel, stream, ServerConnectionStatusType.OPEN);
        clearTimeout(timeoutsRef?.current?.[channel]);
        return eventSource;
      } else {
        const streamCount = Object.keys(channelsRef.current[channel]?.streams ?? {}).length;
        const consumerCount = Object.keys(channelsRef.current[channel]?.streams?.[stream]?.consumers ?? {}).length;

        debugLog(
          `Closing inactive connection for channel ${channel} with ${streamCount} ` +
          `streams and ${consumerCount} consumers`
        );
        closeEventSourceConnection(channel);
        eventSource = null;
      }
    }

    eventSource = getEventSource(channel, stream);
    if (eventSource) return eventSource;

    debugLog('Connecting to server...');
    createEventSource(channel, stream)
    eventSource = getEventSource(channel, stream);
    if (!eventSource) return;
  }

  function getEventSource(channel: string, stream: string): EventSource {
    const eventSource = eventSourcesRef.current[channel];
    updateEventSourceHandlers(eventSource, channel, stream)
    eventSourcesRef.current[channel] = eventSource;
    return eventSource;
  }

  function createEventSource(channel: string, stream: string): EventSource {
    const eventSource = new EventSource(getEventStreamsUrl(channel));
    updateEventSourceHandlers(eventSource, channel, stream)
    eventSourcesRef.current[channel] = eventSource;
    return eventSource;
  }

  function updateEventSourceHandlers(eventSource: EventSource, channel: string, stream: string) {
    if (!(eventSource ?? false)) return;

    eventSource.onerror = (event: Event): any => {
      handleOnError(event, channel, stream);
    };

    eventSource.onmessage = (event: EventStreamResponseType) => {
      handleOnMessage(event, channel, stream);
    };

    eventSource.onopen = (event: Event) => {
      handleOnOpen(event, channel, stream);
    };
  }

  // function setEvents(channel: string, stream: string, eventData: EventStreamType) {
  //   addToStream(channel, stream, { event: eventData });
  // }

  // function setErrors(channel: string, stream: string, error: Event) {
  //   addToStream(channel, stream, { error });
  // }

  // function setStatus(channel: string, stream: string, status: ServerConnectionStatusType) {
  //   addToStream(channel, stream, { status });
  // }

  function closeEventSourceConnection(uuid: string) {
    if (uuid in channelsRef.current) {
      delete channelsRef.current[uuid];
    }

    const eventSource = getEventSource(uuid, undefined);
    if (!eventSource) return;
    closeConnection(eventSource);
    delete eventSourcesRef.current[uuid];
  }

  function hasOpenConnections(): boolean {
    return Object.keys(eventSourcesRef?.current).length > 0;
  }

  function getOpenConnections(): EventSource[] {
    return Object.values(
      eventSourcesRef?.current ?? [])?.filter(es => (es ?? false) && es?.readyState === EventSourceReadyState.OPEN);
  }

  function teardown() {
    if (!hasOpenConnections()) return;

    DEBUG.codeExecution.manager && debugLog('Tearing down...');
    Object.keys(eventSourcesRef?.current).forEach((uuid) => {
      closeEventSourceConnection(uuid);
      DEBUG.codeExecution.manager && debugLog(`Closed event stream connection for ${uuid}`);
    });
  }

  return {
    teardown,
    useExecuteCode,
    useRegistration,
  };
}
