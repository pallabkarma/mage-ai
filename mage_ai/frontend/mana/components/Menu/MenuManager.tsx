import React, { useEffect, useContext, useRef } from 'react';
import { MenuContext } from '@context/v2/Menu';
import { MenuItemType } from '@mana/hooks/useContextMenu';
import { createPortal } from 'react-dom';
import { getAbsoluteRect } from '@mana/shared/utils';
import { LayoutDirectionEnum } from '@mana/components/Menu/types';

export default function MenuManager({
  children,
  contained,
  items,
  open,
  uuid,
}: {
  children: React.ReactNode;
  contained?: boolean;
  items: MenuItemType[];
  open: boolean;
  uuid: string;
}) {
  const {
    portalRef,
    useMenu,
  } = useContext(MenuContext);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { contextMenu, showMenu, hideMenu } = useMenu({
    containerRef,
    uuid,
  });

  useEffect(() => {
    if (open) {
      const rectAbsolute = containerRef?.current?.getBoundingClientRect();
      const {
        parents,
        // rect: rectRelative,
      } = getAbsoluteRect(containerRef?.current, { includeParents: true });
      const parent = parents?.[0];
      // const offset = {
      //   // your absolute - parent absolute
      //   left: rectAbsolute?.left - parent?.left,
      //   top: rectAbsolute?.top - parent?.top,
      // };

      showMenu(items, {
        // contained,
        // direction: LayoutDirectionEnum.LEFT,
        position: rectAbsolute,
        rects: {
          bounding: {
            height: window.innerHeight,
            left: 0,
            top: 0,
            width: window.innerWidth,
          },
          container: rectAbsolute,
          // offset: {
          //   left: -parent?.left,
          //   top: -parent?.top,
          // },
        },
      });
    } else if (!open) {
      hideMenu();
    }
  }, [contained, hideMenu, open, items, showMenu]);

  return (
    <>
      {contained ? contextMenu : createPortal(contextMenu, portalRef.current)}
      <div ref={containerRef}>
        {children}
      </div >
    </>
  );
}
