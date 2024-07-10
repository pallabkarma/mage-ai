import React, { useCallback, useRef, useEffect, useState, useMemo } from 'react';
import { WithOnMount } from './useWithOnMount';
import { RectType } from '@mana/shared/interfaces';

const SHARED_STYLES = {
  height: 9999,
  opacity: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  visibility: 'hidden',
  width: 9999,
  zIndex: -9999,
};

interface NodeData {
  computedStyle: CSSStyleDeclaration;
  rect: RectType;
}

interface NodeType {
  component: React.ReactNode;
  data?: any;
  id: string;
  ref?: React.MutableRefObject<HTMLElement>;
  target?: React.ReactNode;
  targetRef?: React.MutableRefObject<HTMLElement>;
}

interface ShadowRendererType {
  nodes: NodeType[];
  handleDataCapture: (node: NodeType, data: NodeData) => void;
  renderNode?: (node: NodeType) => React.ReactNode | null;
}

export function ShadowRenderer({ nodes, handleDataCapture }: ShadowRendererType) {
  const portalRef = useRef<HTMLDivElement>(null);
  const {
    completed,
    container,
    shadowContainerRef,
  } = useShadowRender(nodes, handleDataCapture);
  const [phase, setPhase] = useState(0);

  // This useEffect will move the nodes out of the shadow DOM and into the main DOM
  useEffect(() => {
    if (nodes?.length >= 1 && completed && phase === 0) {
      const shadowContainer = shadowContainerRef.current;
      if (shadowContainer && portalRef.current) {
        while ((shadowContainer.firstChild ?? false)) {
          if (shadowContainer.firstChild instanceof Node) {
            portalRef.current.appendChild(shadowContainer.firstChild);
          }
        }
        setPhase(1);
      }
    }

    if (nodes?.length >= 1 && phase === 1) {
      let index = 0;
      while ((portalRef.current.firstChild ?? false)) {
        if (portalRef.current.firstChild instanceof Node) {
          const dom = nodes[index].targetRef ?? portalRef;
          dom?.current?.appendChild(portalRef.current.firstChild);
          index++;
        }
      }
    }
  }, [completed, nodes, phase, shadowContainerRef]);

  return (
    <>
      <div
        id="shadow-portal"
        style={{
          ...SHARED_STYLES,
          height: 0,
          width: 0,
        } as React.CSSProperties}
      >
        <div ref={portalRef} />
      </div>

      {nodes?.map(node => node.target)}

      {phase === 0 && container}
    </>
  )
}

export default function useShadowRender(
  nodes: ShadowRendererType['nodes'],
  handleDataCapture: ShadowRendererType['handleDataCapture'],
): any {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRefs = useRef<Record<string, any>>({});
  const [completed, setCompleted] = useState({});
  const isCompleted = useMemo(() => nodes?.every(node => completed[node.id]), [completed, nodes]);

  const captureData = useCallback((
    node: NodeType, element: HTMLElement, onSuccess?: () => void,
  ) => {
    const report = () => {
      clearTimeout(timeoutRefs.current[node.id])
      const computedStyle =
        typeof window !== 'undefined' && window.getComputedStyle(element);

      if (!computedStyle) {
        timeoutRefs.current[node.id] = setTimeout(report, 100);
        return;
      }

      clearTimeout(timeoutRefs.current[node.id]);

      const position = computedStyle.getPropertyValue('position');
      element.style.position = 'absolute';

      const rect = element.getBoundingClientRect();
      handleDataCapture(node, { computedStyle, rect });
      element.style.position = position;
      setCompleted((prev) => ({ ...prev, [node.id]: true }));

      onSuccess && onSuccess?.();
    };

    timeoutRefs.current[node.id] = setTimeout(report, 100);
  }, [handleDataCapture]);

  useEffect(() => {
    const timeouts = Object.values(timeoutRefs.current ?? {}) ?? [];

    return () => {
      timeouts?.forEach(clearTimeout);
      timeoutRefs.current = {};
    };
  }, []);

  return {
    completed: isCompleted,
    container: (
      <div
        id="shadow-container"
        ref={containerRef}
        style={SHARED_STYLES as React.CSSProperties}
      >
        {nodes?.map((node: NodeType) => (
          <WithOnMount
            key={node.id}
            onMount={(ref) => {
              captureData(node, node.ref ? node.ref.current : ref.current);
            }}
            withRef={!node.ref}
          >
            {node.component}
          </WithOnMount>

        ))}
      </div>
    ),
    shadowContainerRef: containerRef,
  };
}
