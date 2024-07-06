import React, { useRef, useEffect } from 'react';
import stylesBuilder from '@styles/scss/apps/Canvas/Pipelines/Builder.module.scss';
import { LayoutConfigType } from '../../Canvas/interfaces';
import { buildContainerClassName, extractContainerClassNames } from './utils/display';
import { levelClassName, groupClassName, nodeTypeClassName, statusClassName } from '../../Canvas/Nodes/utils';
import { get, set } from '@storage/localStorage';
import useAppEventsHandler, { CustomAppEvent, CustomAppEventEnum } from './useAppEventsHandler';
import { STYLE_ROOT_ID } from '@context/v2/Style';
import { getCache } from '@mana/components/Menu/storage';
import { LayoutConfigRef, ModelManagerType, SettingsManagerType } from './interfaces';
import {
  ItemTypeEnum, ItemStatusEnum, ITEM_TYPES,
  LayoutConfigDirectionEnum, LayoutConfigDirectionOriginEnum,
  LayoutDisplayEnum
} from '../../Canvas/types';
import { MenuGroupType } from '@mana/components/Menu/interfaces';
import { Root, createRoot } from 'react-dom/client';
import { BlockTypeEnum } from '@interfaces/BlockType';
import { DEBUG } from '@components/v2/utils/debug';
import { flattenArray } from '@utils/array';

function builderLocalStorageKey(uuid: string) {
  return `pipeline_builder_canvas_local_settings_${uuid}`;
}

export default function useSettingsManager({
  blocksByGroupRef,
  canvasRef,
  containerRef,
  executionFrameworkUUID,
  pipelineUUID,
}: {
  blocksByGroupRef: ModelManagerType['blocksByGroupRef'];
  canvasRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  executionFrameworkUUID: string;
  pipelineUUID: string;
  setHeaderData?: (data: any) => void;
}): SettingsManagerType {
  function defaultLayoutConfig(override?: Partial<LayoutConfigType>) {
    return {
      containerRef,
      direction: LayoutConfigDirectionEnum.VERTICAL,
      display: LayoutDisplayEnum.SIMPLE,
      gap: { column: 40, row: 40 },
      origin: LayoutConfigDirectionOriginEnum.LEFT,
      rectTransformations: null,
      viewportRef: canvasRef,
      ...override,
    };
  }

  const styleRootRef = useRef<HTMLStyleElement>(null);

  const groups = getCache([executionFrameworkUUID, pipelineUUID].join(':'));
  const selectedGroupsRef = useRef<MenuGroupType[]>(groups);
  const activeLevel = useRef<number>(selectedGroupsRef?.current?.length ?? 0);

  const validLevels = useRef<number[]>(null);
  const layoutConfigs = useRef<LayoutConfigRef[]>([
    useRef<LayoutConfigType>(defaultLayoutConfig()),
    useRef<LayoutConfigType>(defaultLayoutConfig({
      direction: LayoutConfigDirectionEnum.HORIZONTAL,
    })),
    useRef<LayoutConfigType>(defaultLayoutConfig({
      direction: LayoutConfigDirectionEnum.HORIZONTAL,
    })),
    useRef<LayoutConfigType>(defaultLayoutConfig({
      direction: LayoutConfigDirectionEnum.HORIZONTAL,
      display: LayoutDisplayEnum.DETAILED,
    })),
  ]);
  const optionalGroupsVisible = useRef<boolean>(null);

  const {
    convertEvent,
    dispatchAppEvent,
  } = useAppEventsHandler({
    activeLevel,
    layoutConfig: layoutConfigs?.current?.[activeLevel?.current ?? 0],
    layoutConfigs,
    selectedGroupsRef,
  } as SettingsManagerType, {
    [CustomAppEventEnum.NODE_LAYOUTS_CHANGED]: handleLayoutUpdates,
    [CustomAppEventEnum.NODE_RECT_UPDATED]: updateVisibleNodes,
    [CustomAppEventEnum.UPDATE_SETTINGS]: updateLocalSettings,
  });

  // TODO: fix local settings
  // const settings = get(builderLocalStorageKey(pipelineUUID));

  // if (settings?.activeLevel !== null) {
  //   activeLevel.current = settings?.activeLevel;
  // }
  // if (settings?.optionalGroupsVisible !== null) {
  //   optionalGroupsVisible.current = settings?.optionalGroupsVisible;
  // }
  // layoutConfig.current ||= {};

  // layoutConfig.current.containerRef = containerRef;
  // layoutConfig.current.display = LayoutDisplayEnum.SIMPLE;
  // layoutConfig.current.direction = settings?.layoutConfig?.direction ?? LayoutConfigDirectionEnum.HORIZONTAL;
  // layoutConfig.current.gap = { column: 40, row: 40 };
  // layoutConfig.current.origin = LayoutConfigDirectionOriginEnum.LEFT;
  // layoutConfig.current.rectTransformations = settings?.layoutConfig?.rectTransformations ?? null;
  // layoutConfig.current.transformStateRef = transformState;
  // layoutConfig.current.viewportRef = canvasRef;

  function updateLocalSettings(event: CustomAppEvent) {
    const { options } = event?.detail ?? {};
    const kwargs = options?.kwargs ?? {};

    DEBUG.settings.manager && console.log('updateLocalSettings', event)

    let level = null
    if ('groups' in kwargs) {
      const { groups } = kwargs;
      selectedGroupsRef.current = groups;
      level = groups.length >= 1
        ? groups[groups.length - 1].level + 1
        : 0;
    } else if ('level' in kwargs) {
      level = kwargs.level;
    }
    setActiveLevel(level);

    if ('layoutConfig' in kwargs) {
      updateLayoutConfig(activeLevel.current, kwargs.layoutConfig);
    }

    updateVisibleNodes(event);

    // if ('optionalGroupVisibility' in (value ?? {})) {
    //   optionalGroupsVisible.current = value ?? false;
    // }

    // const save = {
    //   activeLevel: activeLevel?.current ?? 0,
    //   layoutConfig: {
    //     direction: layoutConfig?.current?.direction ?? null,
    //     rectTransformations: layoutConfig?.current?.rectTransformations?.reduce((acc, { type }) =>
    //       [
    //         TransformRectTypeEnum.LAYOUT_TREE,
    //         TransformRectTypeEnum.LAYOUT_WAVE,
    //         TransformRectTypeEnum.LAYOUT_RECTANGLE,
    //         TransformRectTypeEnum.LAYOUT_GRID,
    //         TransformRectTypeEnum.LAYOUT_SPIRAL,
    //       ].includes(type) ? acc.concat({ type } as any) : acc,
    //       []),
    //   },
    //   optionalGroupsVisible: optionalGroupsVisible?.current ?? false,
    // };

    // set(builderLocalStorageKey(pipelineUUID), save);

    // const val = optionalGroupsVisible?.current ?? false;
    // if (val) {
    //   containerRef?.current?.classList.remove(stylesBuilder['optional-hidden']);
    // } else {
    //   containerRef?.current?.classList.add(stylesBuilder['optional-hidden']);
    // }
  }

  function setActiveLevel(levelArg?: number) {
    const levelPrevious: number = activeLevel?.current ?? null;
    levelPrevious !== null &&
      containerRef?.current?.classList.remove(stylesBuilder[`level-${levelPrevious}-active`]);

    let level: number = levelArg ?? (activeLevel?.current ?? 0);
    if (validLevels?.current?.length >= 1) {
      const idx = validLevels.current.findIndex(i => i === level);
      level = validLevels.current[idx + 1] ?? validLevels.current[0];
    } else {
      level += (levelArg === null ? 1 : 0);
      if (level >= validLevels?.current?.length) {
        level = 0;
      }
    }

    activeLevel.current = level;
  }

  function updateLayoutConfig(level: number, config: LayoutConfigType) {
    layoutConfigs.current[level] = {
      ...layoutConfigs.current[level],
      ...config,
    };
  }

  function updateVisibleNodes(event?: CustomAppEvent) {
    const level = activeLevel.current;
    const display = layoutConfigs?.current?.[level]?.current?.display ?? LayoutDisplayEnum.SIMPLE;
    const conditions = [];

    const payload: {
      classNames?: string[];
      styles?: string;
    } = {};

    const cnsets = [];
    const cnbase = [
      levelClassName(activeLevel?.current),
      statusClassName(ItemStatusEnum.READY),
    ];

    const selectedGroups = selectedGroupsRef?.current;
    if (event && selectedGroups?.length >= 1) {
      const group = selectedGroups?.[selectedGroups?.length - 1];

      if (group?.uuid) {
        const blocksInGroup = blocksByGroupRef?.current?.[group.uuid] ?? [];
        const count = Object.values(blocksInGroup ?? {}).length;

        // Default
        cnsets.push([
          ...cnbase,
          groupClassName(group?.uuid),
          nodeTypeClassName(ItemTypeEnum.NODE),
        ]);
        conditions.push({
          block: {
            groups: [group.uuid],
          },
          level,
          type: ItemTypeEnum.NODE,
        });

        // Group has blocks
        if (count >= 1) {
          ITEM_TYPES.forEach(type => {
            cnsets.push([
              ...cnbase,
              groupClassName(group?.uuid),
              nodeTypeClassName(type),
            ]);
          });
          conditions.push({
            block: {
              uuid: group.uuid,
            },
            level,
            type: ItemTypeEnum.NODE,
          });
        }

        // Get sibling groups so that we can teleport to those.
        const parentUUID = group?.groups?.[group?.groups?.length - 1]?.uuid;
        if (parentUUID) {
          conditions.push({
            block: {
              groups: [parentUUID],
            },
            level,
            type: ItemTypeEnum.NODE,
          });
          cnsets.push([
            ...cnbase,
            groupClassName(parentUUID),
            nodeTypeClassName(ItemTypeEnum.NODE),
          ]);
        }
      }
    } else {
      // If nothing selected, then its level 0
      cnsets.push([
        ...cnbase,
        nodeTypeClassName(ItemTypeEnum.NODE),
      ]);
    }

    DEBUG.settings.manager && console.log(level, cnsets, selectedGroups)

    const individualContainerClassNames =
      cnsets.flatMap(cn => cn.flatMap(buildContainerClassName));
    // .ctn--grp--tokenization.ctn--lvl--3.ctn--nty--node.ctn--sts--ready
    // .ctn--grp--tokenization.ctn--lvl--3.ctn--nty--block.ctn--sts--ready
    const cncons = [];
    // .grp--tokenization.lvl--3.nty--node.sts--ready
    // .grp--tokenization.lvl--3.nty--block.sts--ready
    const cnames = [];

    cnsets.forEach(cns => {
      // .ctn--grp--tokenization.ctn--lvl--3.ctn--nty--node.ctn--sts--ready
      const cncon = cns.map(buildContainerClassName).map(cn => `.${cn}`).join('');
      cncons.push(cncon);

      // .grp--tokenization.lvl--3.nty--node.sts--ready
      const cn = cns.map(cn => `.${cn}`).join('');
      cnames.push(cn);
    });

    const cncon = cncons.join(',\n');
    const cn = cnames.join(',\n');
    const styles = `
      ${cncon} {
        ${cn} {
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
          z-index: 6;

          .codeExecuted {
            .outputContainer {
              visibility: visible;
              opacity: 1;
              pointer-events: all;
              z-index: 6;
            }
          }

          .outputContainer {
            opacity: 0;
            pointer-events: none;
            visibility: hidden;
            z-index: -1;
          }
        }
      }
    `;

    payload.classNames = individualContainerClassNames;
    payload.styles = styles;

    resetContainerClassNames();
    setStyles();
    addContainerClassNames();

    dispatchAppEvent(CustomAppEventEnum.UPDATE_NODE_LAYOUTS, {
      event: convertEvent(event),
      options: {
        kwargs: {
          ...(conditions?.length === 0 ? null : { conditions }),
          ...payload,
        },
      },
    });
  }

  function defaultStylesAndContainerClassNames() {
    const cns = ITEM_TYPES.map(nodeTypeClassName);
    const cncons = cns.map(buildContainerClassName);
    const cnconsand = cncons.map(cn => `.${cn}`).join('');
    const cnsor = cns.map(cn => `.${cn}`).join(',\n');
    const styles = `
    ${cnconsand} {
      @keyframes start {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      ${cnsor} {
        animation: start 1s forwards;
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
        z-index: -1;
      }
    }`;

    return {
      classNames: cncons,
      styles,
    };
  }

  function addContainerClassNames(classNames?: string[]) {
    [
      ...(classNames ?? []),
      ...defaultStylesAndContainerClassNames().classNames
    ].forEach(cn => containerRef?.current?.classList.add(cn));
  }

  function handleLayoutUpdates(event: CustomAppEvent) {
    DEBUG.settings.manager && console.log('handleLayoutUpdates', event)
    const { classNames, styles } = event?.detail?.options?.kwargs ?? {};

    classNames && addContainerClassNames(classNames);
    styles && setStyles(styles);
  }

  function setStyles(styles?: string) {
    if (!styleRootRef?.current) {
      styleRootRef.current = document.getElementById(STYLE_ROOT_ID) as HTMLStyleElement;
    }
    styleRootRef.current.textContent = [
      defaultStylesAndContainerClassNames().styles,
      styles ?? '',
    ].join('\n');
  }

  function resetContainerClassNames() {
    extractContainerClassNames(
      [...((containerRef?.current?.classList ?? []) as string[])],
    )?.forEach(cn => {
      containerRef?.current?.classList?.remove(cn);
    });
  }

  return {
    activeLevel,
    layoutConfigs,
    selectedGroupsRef,
  };
}
