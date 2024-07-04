import React, { createRef, useCallback, useMemo, useRef } from 'react';
import useContextMenu from '@mana/hooks/useContextMenu';
import Grid from '@mana/components/Grid';
import stylesHeader from '@styles/scss/layouts/Header/Header.module.scss';
import { Code, Builder, CaretDown, CaretLeft } from '@mana/icons';
import MageAvatar from '@mana/icons/avatars';
import Button, { ButtonProps } from '@mana/elements/Button';
import Text from '@mana/elements/Text';
import NavTag from '@mana/components/Tag/NavTag';
import { getUser } from '@utils/session';
import DashedDivider from '@mana/elements/Divider/DashedDivider';
import {
  MenuItemType,
} from '@mana/hooks/useContextMenu';

export const HEADER_ROOT_ID = 'v2-header-root';

export type HeaderProps = {
  globalNavItems?: MenuItemType[];
  interAppNavItems?: MenuItemType[];
  intraAppNavItems?: MenuItemType[];
  navTag?: string;
  router?: any;
  selectedNavItem?: string;
  title?: string;
};

export function Header({
  globalNavItems,
  interAppNavItems,
  intraAppNavItems,
  navTag,
  router,
  selectedNavItem,
  title,
}: HeaderProps, ref: React.MutableRefObject<HTMLDivElement | null>) {
  let headerRef = ref;
  headerRef ||= useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<string, React.MutableRefObject<HTMLElement>>>({});

  const {
    contextMenu,
    renderContextMenu,
    removeContextMenu,
  } = useContextMenu({
    containerRef: headerRef,
    useAsStandardMenu: true,
    uuid: 'main-header',
  });

  const buttonProps = {
    className: [
      stylesHeader.button,
    ].join(' '),
    // motion: true,
    small: true,
  };
  const gridProps = {
    autoColumns: 'min-content',
    autoFlow: 'column',
    columnGap: 10,
  };
  const iconProps = {
    className: stylesHeader.buttonIcon,
    size: 16,
  };

  const interAppItems = interAppNavItems ?? [
    {
      Icon: Builder,
      // linkProps: {
      //   as: '/v2/pipelines/[slug]/builder/[subslug]', // Dynamic route template
      //   href: '/v2/pipelines/rag1/builder/rag', // Actual path with replaced segments
      // },
      onClick: () => {
        router.push({
          pathname: '/v2/pipelines/[slug]/builder/[framework]',
          query: {
            framework: 'rag',
            slug: 'rag1',
          },
        });
      },
      uuid: 'builder',
    },
    {
      Icon: Code,
      // linkProps: {
      //   href: '/v2/test',
      // },
      onClick: () => {
        router.push('/v2/test');
      },
      uuid: 'code',
    },
  ];

  const intraAppItems = intraAppNavItems ?? [
    {
      label: () => 'RAG overview',
      items: [
        {
          label: () => 'RAG1',
          onClick: () => null,
          uuid: 'rag1',
        },
        {
          label: () => 'RAG2',
          onClick: () => null,
          uuid: 'rag2',
        },
        {
          label: () => 'RAG3',
          onClick: () => null,
          uuid: 'rag3',
        },
      ],
      uuid: 'rag',
    },
    {
      label: () => 'Pipelines',
      onClick: () => null,
      uuid: 'pipelines',
    },
    {
      label: () => 'My pipeline',
      onClick: () => null,
      uuid: 'current',
    },
  ];

  const renderIntraAppItems = useCallback((navItems) => navItems?.map(({
    items,
    uuid,
  }) => {
    buttonRefs.current[uuid] ||= createRef();
    const buttonRef = buttonRefs.current[uuid];

    return (
      <div ref={buttonRef} key={uuid}>
        <Button
          {...buttonProps}
          onClick={() => renderContextMenu(null, items, {
            container: buttonRef.current,
          })}
          style={{
            gridTemplateColumns: '',
          }}
        >
          <Grid
            {...gridProps}
            alignItems="center"
            columnGap={10}
          >
            RAG overview

            <CaretDown {...iconProps} />
          </Grid>
        </Button >
      </div>
    )
  }), [buttonProps, gridProps, iconProps, renderContextMenu]);

  const globalItems = globalNavItems ?? [
    {
      href: 'https://www.mage.ai/help',
      label: () => 'Help',
      style: {
        gridTemplateColumns: '',
      },
      target: '_blank',
      uuid: 'help',
    },
  ];

  const renderNavItems = (items: MenuItemType[]) => items.map(({
    Icon,
    label,
    uuid,
    ...rest
  }) => (
    <nav key={uuid}>
      <Button
        {...buttonProps}
        {...rest}
        Icon={ip => Icon ? <Icon {...ip} {...iconProps} /> : null}
        className={[
          ...(buttonProps?.className?.split(' ') ?? []),
          selectedNavItem === uuid ? stylesHeader.selected : '',
        ].filter(Boolean).join(' ')}
        data-uuid={uuid}
        style={{
          gridTemplateColumns: '',
        }}
      >
        {label && label?.()}
      </Button>
    </nav>
  ));

  return (
    <>
      <header
        className={stylesHeader.header}
        ref={headerRef}
      >
        <Grid
          {...gridProps}
          paddingBottom={6}
          paddingLeft={10}
          paddingRight={10}
          paddingTop={6}
          style={{
            gridTemplateColumns: 'auto auto auto 1fr auto',
          }}
        >
          <Grid
            {...gridProps}
          >
            <Button
              {...buttonProps}
              style={{
                gridTemplateColumns: '',
              }}
            >
              <Grid
                {...gridProps}
                alignItems="center"
                columnGap={12}
                paddingRight={(title ?? false) ? 8 : undefined}
              >
                <CaretLeft {...iconProps} />

                {navTag && <NavTag role="tag">{navTag}</NavTag >}
                {title && <Text role="title" semibold>{title}</Text>}
              </Grid>
            </Button >
          </Grid >

          <Grid {...gridProps}>
            {renderNavItems(interAppItems)}
          </Grid>

          <Grid {...gridProps}>
            <DashedDivider vertical />

            {renderIntraAppItems(intraAppItems)}
          </Grid>

          <Grid {...gridProps} />

          <Grid {...gridProps}>
            {renderNavItems(globalItems)}

            <Button
              {...buttonProps}
              style={{
                gridTemplateColumns: '',
              }}
            >
              <Grid
                {...gridProps}
                alignItems="center"
                columnGap={10}
              >
                <MageAvatar size={24} variant="a" />

                Sorceress

                <CaretDown {...iconProps} />
              </Grid>
            </Button >
          </Grid>
        </Grid >

        <DashedDivider />
      </header >
      {contextMenu}
    </>
  );
}

export default React.forwardRef(Header);
