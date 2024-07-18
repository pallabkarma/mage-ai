import PipelineCanvasV2, { PipelineCanvasV2Props } from './CanvasV2';
import useContextMenu from '@mana/hooks/useContextMenu';
import { ClientEventType } from '@mana/shared/interfaces';
import { DndProvider } from 'react-dnd';
import { ElementRoleEnum } from '@mana/shared/types';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ZoomPanStateType, useZoomPan } from '@mana/hooks/useZoomPan';
import { getClosestRole } from '@utils/elements';
import { useEffect, useRef, useState } from 'react';
import { DEBUG } from '@components/v2/utils/debug';

export default function PipelineBuilder({
  loading,
  ...props
}: PipelineCanvasV2Props & {
  loading?: boolean;
}) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const disabledRef = useRef(false);
  const handlePanning = useRef<
    (
      event: MouseEvent,
      positionOverride?: {
        x?: number;
        xPercent?: number;
        y?: number;
        yPercent?: number;
      },
    ) => void
  >(() => null);
  const handleZoom = useRef<(event: WheelEvent, scaleOverride?: number) => void>(() => null);
  const originX = useRef(0);
  const originY = useRef(0);
  const panning = useRef({ active: false, direction: null });
  const phase = useRef(0);
  const scale = useRef(1);
  const startX = useRef(0);
  const startY = useRef(0);
  const transformRef = useRef(null);
  const zoom = useRef(1);

  const zoomPanStateRef = useRef<ZoomPanStateType>({
    container: containerRef,
    disabled: disabledRef,
    element: canvasRef,
    handlePanning,
    handleZoom,
    originX,
    originY,
    panning,
    phase,
    scale,
    startX,
    startY,
    transform: transformRef,
    zoom,
  });
  const [dragEnabled, setDragEnabled] = useState(false);
  const [dropEnabled, setDropEnabled] = useState(false);
  const [, setZoomPanDisabledState] = useState(false);

  const { contextMenu, renderContextMenu, removeContextMenu, shouldPassControl } = useContextMenu({
    container: containerRef.current,
    uuid: 'pipeline-builder-canvas',
  });

  useZoomPan(zoomPanStateRef, {
    roles: [ElementRoleEnum.DRAGGABLE],
    // initialPosition: {
    //   xPercent: 0.5,
    //   yPercent: 0.5,
    // },
  });

  function setZoomPanDisabled(value: boolean) {
    zoomPanStateRef.current.disabled.current = value;
    // We need to update any state or else dragging doesn’t work.
    setZoomPanDisabledState(value);
  }

  DEBUG.dragging && console.log(['dragEnabled', dragEnabled], ['dropEnabled', dropEnabled]);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (shouldPassControl(event as ClientEventType)) return;
      removeContextMenu(event as ClientEventType, { conditionally: true });

      const targetElement = event.target as HTMLElement;
      const hasRole =
        dragEnabled &&
        getClosestRole(targetElement, [dragEnabled && ElementRoleEnum.DRAGGABLE].filter(Boolean));

      DEBUG.dragging && console.log('handleMouseDown', targetElement, hasRole);
      if (hasRole) {
        // For some reason, we need to do this or else you can’t drag anything.
        setZoomPanDisabled(true);
        setDragEnabled(true);
        setDragEnabled(true);
      }
    };

    const handleMouseUp = (event: MouseEvent) => {
      // Always do this or else there will be situations where it’s never reset.

      if (shouldPassControl(event as ClientEventType)) return;

      const targetElement = event.target as HTMLElement;
      const hasRole =
        dragEnabled &&
        getClosestRole(
          targetElement,
          [
            dragEnabled && ElementRoleEnum.DRAGGABLE,
            dropEnabled && ElementRoleEnum.DROPPABLE,
          ].filter(Boolean),
        );

      if (hasRole) {
        setZoomPanDisabled(false);
        setDragEnabled(false);
        setDropEnabled(false);
      }
    };

    const canvasElement = canvasRef.current;

    if (canvasElement) {
      canvasElement.addEventListener('mousedown', handleMouseDown);
      canvasElement.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (canvasElement) {
        canvasElement.removeEventListener('mousedown', handleMouseDown);
        canvasElement.removeEventListener('mouseup', handleMouseUp);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragEnabled, dropEnabled]);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <PipelineCanvasV2
          {...props}
          canvasRef={canvasRef}
          containerRef={containerRef}
          dragEnabled={dragEnabled}
          dropEnabled={dropEnabled}
          removeContextMenu={removeContextMenu}
          renderContextMenu={renderContextMenu}
          setDragEnabled={setDragEnabled}
          setDropEnabled={setDropEnabled}
          setZoomPanDisabled={setZoomPanDisabled}
          transformState={zoomPanStateRef}
        />
      </DndProvider>

      {contextMenu}
    </>
  );
}
