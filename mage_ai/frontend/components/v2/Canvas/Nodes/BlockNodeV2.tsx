import BlockNodeComponent, { BlockNodeProps, BADGE_HEIGHT, PADDING_VERTICAL } from './BlockNode';
import EventStreamType, { ServerConnectionStatusType } from '@interfaces/EventStreamType';
import { formatNumberToDuration } from '@utils/string';
import { getFileCache, updateFileCache } from '../../IDE/cache';
import { executionDone } from '@components/v2/ExecutionManager/utils';
import { ThemeContext } from 'styled-components';
import ContextProvider from '@context/v2/ContextProvider';
import { AppConfigType } from '../../Apps/interfaces';
import EditorAppNode from './Apps/EditorAppNode';
import { EventContext } from '../../Apps/PipelineCanvas/Events/EventContext';
import { ModelContext } from '@components/v2/Apps/PipelineCanvas/ModelManager/ModelContext';
import { OpenInSidekick, Trash } from '@mana/icons';
import stylesBlockNode from '@styles/scss/components/Canvas/Nodes/BlockNode.module.scss';
import BlockType, { BlockTypeEnum } from '@interfaces/BlockType';
import React, { useState, useCallback, useContext, useMemo, useRef, useEffect } from 'react';
import { NodeType } from '../interfaces';
import { setNested } from '@utils/hash';
import { RectType } from '@mana/shared/interfaces';
import { buildAppNode } from '@components/v2/Apps/PipelineCanvas/AppManager/utils';
import { AppSubtypeEnum, AppStatusEnum, AppTypeEnum } from '@components/v2/Apps/constants';
import { createPortal } from 'react-dom';
import { createRoot, Root } from 'react-dom/client';
import { FileType } from '@components/v2/IDE/interfaces';
import { getClosestRole } from '@utils/elements';
import { ElementRoleEnum } from '@mana/shared/types';
import { buildOutputNode } from '@components/v2/Apps/PipelineCanvas/utils/items';

type BlockNodeType = {
  block: BlockType;
  dragRef?: React.MutableRefObject<HTMLDivElement>;
  index?: number;
  groupSelection?: boolean;
  node: NodeType;
  openApp?: (
    appConfig: AppConfigType,
    appNodeRef: React.MutableRefObject<HTMLDivElement>,
    callback: () => void,
    onCloseRef: React.MutableRefObject<() => void>,
  ) => void;
  showOutput?: () => void;
};

function BlockNode({
  block,
  dragRef,
  node,
  groupSelection,
  openApp,
  showOutput,
  ...rest
}: BlockNodeType, ref: React.MutableRefObject<HTMLElement>) {
  const themeContext = useContext(ThemeContext);
  const { configuration, name, type } = block;
  const { file } = configuration ?? {};

  const timeoutRef = useRef(null);
  const onCloseRef = useRef<() => void>(null);
  const consumerIDRef = useRef<string>(null);
  const connectionErrorRef = useRef(null);
  const connectionStatusRef = useRef<ServerConnectionStatusType>(null);
  const onMessageRefs = useRef<Record<string, (event: EventStreamType) => void>>(null);

  const appRootRef = useRef<Root>(null);
  const outputRootRef = useRef<Root>(null);
  const appNodeRef = useRef<HTMLDivElement>(null);
  const outputNodeRef = useRef<HTMLDivElement>(null);


  // APIs
  const fileRef = useRef<FileType>(null);
  const { mutations } = useContext(ModelContext);

  // Attributes
  const isGroup =
    useMemo(() => !type || [BlockTypeEnum.GROUP, BlockTypeEnum.PIPELINE].includes(type), [type]);
  const [executing, setExecuting] = useState(false);

  // Controls
  // const loadingButtonRef = useRef<HTMLElement>(null);
  const timerStatusRef = useRef(null);

  const { handleContextMenu, removeContextMenu, setSelectedGroup,
    useExecuteCode, useRegistration,
  } = useContext(EventContext);

  // Methods
  const channel = useMemo(() => block.uuid, [block]);
  const stream = 'code_executions';
  const { executeCode } = useExecuteCode(channel, stream);
  const { subscribe, unsubscribe } = useRegistration(channel, stream);

  function getFile(event: any, callback?: () => void) {
    const { configuration } = block ?? {};
    const { file } = configuration ?? {};

    mutations.files.detail.mutate({
      event,
      id: file?.path,
      onSuccess: ({ data }) => {
        fileRef.current = data?.browser_item;
        updateFileCache({
          server: data?.browser_item,
        });
        callback && callback?.();
      },
      query: {
        output_namespace: stream,
      },
    });
  }

  function handleError(error: Event) {
    console.log('[BlockNodeWrapper] connection.error:', error);
    connectionErrorRef.current = error;
    console.error('[BlockNodeWrapper] connection.error:', error);
  }

  function handleOpen(status: ServerConnectionStatusType) {
    console.log('[BlockNodeWrapper] connection.status:', status);
    connectionStatusRef.current = status;
  }

  function handleSubscribe(consumerID: string) {
    onMessageRefs.current['node'] = (event: EventStreamType) => {
      if (executionDone(event)) {
        // loadingButtonRef?.current?.classList?.remove(stylesBlockNode.loading);
        clearTimeout(timeoutRef.current);
        setExecuting(false);
      }
    };

    subscribe(consumerID, {
      onError: handleError,
      onMessage: (event: EventStreamType) => {
        Object.values(onMessageRefs.current ?? {}).forEach(handler => handler(event));
      },
      onOpen: handleOpen,
    });
  }

  const getCode = useCallback(() =>
    getFileCache(file?.path)?.client?.file?.content, [file]);

  const submitCodeExecution = useCallback((event: React.MouseEvent<HTMLElement>) => {
    handleSubscribe('BlockNode');

    const execute = () => {
      const message = getCode();
      const [messageRequestUUID, future] = executeCode(message, {
        output_dir: file?.path ?? null,
        source: block.uuid,
      }, {
        future: true, onError: () => {
          getClosestRole(event.target as HTMLElement, [ElementRoleEnum.BUTTON]);
          clearTimeout(timeoutRef.current);
        },
      });

      const outputNode = buildOutputNode(node, block, {
        message,
        message_request_uuid: messageRequestUUID,
        uuid: channel,
      });

      // loadingButtonRef.current =
      //   getClosestRole(event.target as HTMLElement, [ElementRoleEnum.BUTTON]);

      // loadingButtonRef?.current?.classList?.add(stylesBlockNode.loading);

      future();
      setExecuting(true);

      let loops = 0;
      const now = Number(new Date());
      const updateTimerStatus = () => {
        let diff = (Number(new Date()) - now) / 1000;
        if (loops >= 600) {
          diff = Math.round(diff);
        }

        if (timerStatusRef?.current) {
          timerStatusRef.current.innerText =
            formatNumberToDuration(diff * 1000);
        }
        loops++;
        timeoutRef.current = setTimeout(
          updateTimerStatus,
          diff <= 60 * 1000 && loops <= 60 * 10 ? 100 : 1000,
        );
      };

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(
        updateTimerStatus,
        0,
      );
    };

    if (getCode()?.length >= 1) {
      execute();
    } else {
      getFile(event, execute);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [block, node, executeCode]);

  function updateBlock(event: any, key: string, value: any) {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      clearTimeout(timeoutRef.current);

      mutations.pipelines.update.mutate({
        event,
        onError: () => {
          ref?.current?.classList?.remove(stylesBlockNode.loading);
        },
        onStart: () => {
          ref?.current?.classList?.add(stylesBlockNode.loading);
        },
        onSuccess: () => {
          ref?.current?.classList?.remove(stylesBlockNode.loading);
        },
        payload: {
          block: setNested({
            configuration: block.configuration,
            uuid: block.uuid,
          }, key, value),
        },
      });
    }, 1000);
  }

  function closeEditorApp() {
    appRootRef.current?.render(<div></div>);
    onCloseRef?.current?.();
  }

  function renderEditorApp(opts?: {
    app?: AppConfigType;
    block?: BlockType;
    fileRef?: React.MutableRefObject<FileType>;
  }) {
    appRootRef.current ||= createRoot(appNodeRef.current);
    appRootRef.current.render(
      <ContextProvider theme={themeContext}>
        <EditorAppNode
          app={opts?.app}
          block={opts?.block ?? block}
          executing={executing}
          fileRef={opts?.fileRef ?? fileRef}
          onClose={() => {
            closeEditorApp();
          }}
          onMessageRefs={onMessageRefs}
          submitCodeExecution={submitCodeExecution}
        />
      </ContextProvider>,
    );
  }

  function launchEditorApp(event: any) {
    const app = {
      subtype: AppSubtypeEnum.CANVAS,
      type: AppTypeEnum.EDITOR,
      uuid: [block.uuid, AppTypeEnum.EDITOR, AppSubtypeEnum.CANVAS].join(':'),
    };

    const render = () => openApp(app, appNodeRef, () => {
      renderEditorApp({
        app,
        block,
        fileRef,
      });
    }, onCloseRef);

    if (fileRef.current ?? false) {
      render();
    } else {
      getFile(event, () => render());
    }
  }

  return (
    <div
      className={[
        stylesBlockNode.blockNodeWrapper,
        groupSelection && stylesBlockNode.groupSelection,
        executing && stylesBlockNode.executing,
      ].filter(Boolean).join(' ')}
      onContextMenu={(event: any) => {
        if (groupSelection || event.metaKey) return;

        event.preventDefault();
        event.stopPropagation();

        const items = [];

        if (isGroup) {
          items.push({
            Icon: OpenInSidekick,
            onClick: (event: any) => {
              event?.preventDefault();
              setSelectedGroup(block);
              removeContextMenu(event);
            },
            uuid: `Teleport into ${block?.name}`,
          });
        } else {
          items.push({
            Icon: Trash,
            onClick: (event: any) => {
              event?.preventDefault();

              mutations.pipelines.update.mutate({
                event,
                onSuccess: () => {
                  removeContextMenu(event);
                },
                payload: (pipeline) => ({
                  ...pipeline,
                  blocks: pipeline?.blocks?.filter((b: BlockType) => b.uuid !== block.uuid),
                }),
              });
            },
            uuid: `Remove ${name} from pipeline`,
          });
        }

        handleContextMenu(event, items, {
          reduceItems: (i1, i2) => i1,
        });
      }}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <BlockNodeComponent
        {...rest}
        block={block}
        dragRef={dragRef}
        executing={executing}
        groupSelection={groupSelection}
        node={node}
        openEditor={launchEditorApp}
        submitCodeExecution={submitCodeExecution}
        timerStatusRef={timerStatusRef}
        updateBlock={updateBlock}
      />
    </div>
  );
}

function areEqual(p1: BlockNodeType, p2: BlockNodeType) {
  return p1.block.uuid === p2.block.uuid
    && p1?.groupSelection === p2?.groupSelection;
}

export default React.memo(React.forwardRef(BlockNode), areEqual);

export { BADGE_HEIGHT, PADDING_VERTICAL };
