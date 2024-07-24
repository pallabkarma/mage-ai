import Menu, { MenuProps } from '../components/Menu';
import React, { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import useKeyboardNavigation from './useKeyboardNavigation';
import { KeyEnum } from '../events/enums';
import { MenuItemType as MenuItemTypeT } from '../components/Menu/interfaces';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { createRoot, Root } from 'react-dom/client';

export type RenderContextMenuOptions = {
  contained?: any;
  contextMenuRef?: React.MutableRefObject<HTMLDivElement>;
  containerRef?: React.MutableRefObject<HTMLDivElement>;
  direction?: any;
  handleEscape?: any;
  onClose?: any;
  openItems?: any;
  position?: any;
  rects?: any;
  reduceItems?: any;
  uuid?: string;
};

export type RenderContextMenuType = (
  event: any,
  items?: any,
  opts?: any,
) => void;
export type RemoveContextMenuType = (
  event: any,
  opts?: any,
) => void;

export type MenuItemType = any;
export type ClientEventType = any;

export interface ContextMenuType {
  contextMenuRef: React.MutableRefObject<HTMLDivElement>;
  removeContextMenu: any;
  renderContextMenu: any;
  shouldPassControl: any;
  showMenu: (items: MenuItemType[], opts?: RenderContextMenuOptions, uuid?: string) => void;
  hideMenu: any;
  teardown: any;
}

export type ContextMenuProps = {
  container?: HTMLDivElement;
  containerRef?: React.RefObject<HTMLDivElement>;
  useAsStandardMenu?: boolean;
  uuid: string;
};

function keyboardNavigationItemFilter(item: MenuItemType): boolean {
  return !item?.divider && (!!item?.onClick || item?.items?.length >= 1);
}
export default function useContextMenu({
  container,
  containerRef: containerRefBase,
  useAsStandardMenu,
  uuid: uuidBase,
}: ContextMenuProps): ContextMenuType {
  const activeRef = useRef<string>(null);

  const contextMenuRef = useRef<HTMLDivElement | null>(null);
  const menuRefs = useRef<Record<string, React.MutableRefObject<HTMLDivElement>>>({
    [uuidBase]: contextMenuRef,
  });
  const menuRootRefs = useRef<Record<string, Root>>({
    [uuidBase]: null,
  });
  const menuItemsRefs = useRef<Record<string, MenuItemType[]>>({
    [uuidBase]: null,
  });
  const containerRefs = useRef<Record<string, React.MutableRefObject<HTMLDivElement>>>({
    [uuidBase]: containerRefBase,
  });

  const { itemsRef, registerItems, resetPosition } = useKeyboardNavigation({
    itemFilter: keyboardNavigationItemFilter,
    target: menuRootRefs.current[uuidBase],
  });

  const themeContext = useContext(ThemeContext);

  const getContainer = (uuid: string) => containerRefs?.current?.[uuid]?.current ?? container;

  const rootID = useCallback((uuid: string) => `context-menu-root-${uuid}`, []);

  function isEventInContainer(event: ClientEventType, containerArg?: HTMLElement, uuid?: string): boolean {
    console.log('IS EVENT IN CONTAINER MENU', event, containerArg, getContainer(uuid ?? uuidBase), container, containerRefBase, containerRefs.current, uuid, uuidBase)
    return event && (containerArg ?? getContainer(uuid ?? uuidBase))?.contains(event.target as Node);
  }

  function isEventInContextMenu(event: ClientEventType, contextMenu?: HTMLDivElement, uuid?: string): boolean {
    return event && (contextMenu ?? menuRefs?.current?.[uuid ?? uuidBase]?.current)?.contains(event.target as Node);
  }

  function shouldPassControl(event: ClientEventType, uuid?: string) {
    return event.button === 2 && event && isEventInContainer(event, null, uuid);
  }

  function hideMenu(uuid?: string) {
    console.log('HIDE', uuid, menuRootRefs?.current?.[uuid])
    menuRootRefs?.current?.[uuid ?? uuidBase]?.render([]);
  }

  function showMenu(items: MenuItemType[], opts?: RenderContextMenuOptions, uuid?: string) {
    renderContextMenu(null, items ?? itemsRef.current, {
      ...opts,
      uuid,
    });
  }

  function removeContextMenu(event: ClientEventType, opts?: {
    conditionally?: boolean;
  }, uuid?: string) {
    console.log('REMOVE')
    const id = uuid ?? uuidBase;

    if (opts?.conditionally && event && isEventInContextMenu(event, null, id)) return;

    const menuRoot = menuRootRefs?.current?.[id];
    if (menuRoot) {
      menuRoot.unmount();
    }

    delete menuRootRefs.current[id];

    activeRef.current = null;

    resetPosition();
  }

  function renderContextMenu(
    event: ClientEventType,
    items: MenuItemType[],
    opts?: RenderContextMenuOptions,
  ) {
    const {
      contained,
      containerRef,
      contextMenuRef,
      handleEscape,
      openItems,
      position,
      uuid,
    } = opts ?? {};
    const id = uuid ?? uuidBase;
    activeRef.current = id;

    if (uuid) {
      containerRefs.current[uuid] = containerRef;
      menuRefs.current[uuid] = contextMenuRef;
    }

    console.log(event, items, opts, event && !isEventInContainer(event, null, id))
    if (!contained && event && !isEventInContainer(event, null, id)) return;

    event && event?.preventDefault();

    const render = (root: Root) =>
      root.render(
        <ThemeProvider theme={themeContext}>
          {/* @ts-ignore */}
          <Menu
            {...opts}
            contained={contained}
            event={event}
            items={items}
            keyboardNavigationItemFilter={keyboardNavigationItemFilter}
            openItems={openItems}
            position={
              position ?? {
                left: event?.pageX,
                top: event?.pageY,
              }
            }
            small
            standardMenu={useAsStandardMenu}
            uuid={id}
          />
        </ThemeProvider>,
      );

    const menuElement = menuRefs.current?.[id]?.current ?? menuRefs.current[uuidBase]?.current;

    console.log('RENDER',
      uuidBase, 'uuidBase',
      id, 'id',
      menuElement, 'menuElement',
      contextMenuRef, 'contextMenuRef',
      items, 'items',
      menuRefs.current, 'menuRefs.current',
      menuRootRefs.current, 'menuRootRefs.current',
      containerRefs.current, 'containerRefs.current',
    )

    menuRootRefs.current[id] ||= createRoot(menuElement as any);
    menuItemsRefs.current[uuid] = items;
    render(menuRootRefs.current[id]);

    registerItems(items, {
      ...(openItems
        ? {
            position: openItems?.map(({ row }) => row),
          }
        : {}),
      ...(handleEscape
        ? {
            commands: {
              escape: {
                handler: handleEscape,
                predicate: { key: KeyEnum.ESCAPE },
              },
            },
          }
        : {}),
    });
  }

  function teardown(uuid?: string) {
    const uuids = uuid ? [uuid] : Object.keys(menuRootRefs.current);

    uuids.forEach((id) => {
      const menuRoot = menuRootRefs.current?.[id];
      menuRoot && menuRoot.unmount();

      delete containerRefs.current[id];
      delete menuItemsRefs.current[id];
      delete menuRefs.current[id];
      delete menuRootRefs.current[id];
    });
  }

  useEffect(() => {
    const handleDocumentClick = (event: any) => {
      const node = document.getElementById(rootID(activeRef.current));
      if (node && !node?.contains(event.target as Node)) {
        removeContextMenu(event, null, activeRef.current);
      }
    };

    document?.addEventListener('click', handleDocumentClick);

    return () => {
      document?.removeEventListener('click', handleDocumentClick);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useAsStandardMenu]);

  return {
    contextMenuRef: menuRefs.current[uuidBase],
    hideMenu,
    removeContextMenu,
    renderContextMenu,
    shouldPassControl,
    showMenu,
    teardown,
  };
}
