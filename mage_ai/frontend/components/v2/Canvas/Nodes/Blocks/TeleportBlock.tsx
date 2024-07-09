import BlockType, { BlockTypeEnum } from '@interfaces/BlockType';
import { LayoutConfigDirectionEnum } from '../../types';
import { AnimatePresence, cubicBezier, motion, useAnimation } from 'framer-motion';
import { SettingsContext } from '@components/v2/Apps/PipelineCanvas/SettingsManager/SettingsContext';
import Grid from '@mana/components/Grid';
import Link from '@mana/elements/Link';
import useAppEventsHandler, { CustomAppEvent, CustomAppEventEnum } from '@components/v2/Apps/PipelineCanvas/useAppEventsHandler';
import { MenuGroupType } from '@mana/components/Menu/interfaces';
import { ModelContext } from '@components/v2/Apps/PipelineCanvas/ModelManager/ModelContext';
import { NodeItemType } from '../../interfaces';
import { getBlockColor } from '@mana/themes/blocks';
import { getModeColorName } from '../presentation';
import { useContext, useEffect, useMemo, useRef } from 'react';
import { ElementRoleEnum } from '@mana/shared/types';

export default function TeleportGroup({
  block,
  buildBadgeRow,
  index: indexProp,
  role,
  node,
  selectedGroup,
}: {
  block: BlockType;
  buildBadgeRow: (props: { inputColorName?: string; outputColorName?: string }) => JSX.Element;
  index?: number;
  node?: NodeItemType;
  role?: ElementRoleEnum;
  selectedGroup: MenuGroupType;
}) {
  const controls = useAnimation();
  const phaseRef = useRef(0);
  const timeoutRef = useRef(null);

  const { activeLevel, layoutConfigs, selectedGroupsRef } = useContext(SettingsContext);
  const layoutConfig = layoutConfigs?.current?.[activeLevel?.current - 1]?.current;
  const { convertEvent, dispatchAppEvent } = useAppEventsHandler({ block } as any);
  const { blocksByGroupRef, groupMappingRef, groupsByLevelRef } = useContext(ModelContext);
  const groupsInLevel = groupsByLevelRef?.current?.[activeLevel?.current - 2];
  const group = groupMappingRef?.current?.[selectedGroup?.uuid];
  const groupBlocks = Object.values(blocksByGroupRef?.current?.[group?.uuid] ?? {});

  const parentGroups = groupsInLevel?.filter(({ uuid }) => block?.groups?.includes(uuid));
  const groupsInParent = parentGroups?.flatMap(({ children }) => children ?? []);

  const {
    downstreamInGroup,
    upstreamInGroup,
  } = useMemo(() => {
    const up = [];
    const dn = [];
    groupsInParent.forEach((bgroup: BlockType) => {
      const bgroupBlocks = Object.values(blocksByGroupRef?.current?.[bgroup?.uuid] ?? {}) ?? [];
      const modeColor = getModeColorName(bgroupBlocks)?.base;
      const groupColor = getBlockColor(bgroup?.type ?? BlockTypeEnum.GROUP, { getColorName: true })?.names?.base;
      const bgroup2 = {
        ...bgroup,
        blocks: bgroupBlocks,
        colorName: modeColor ?? groupColor,
      }

      if (block?.upstream_blocks?.includes(bgroup?.uuid)) {
        up.push(bgroup2);
      } else if (block?.downstream_blocks?.includes(bgroup?.uuid)) {
        dn.push(bgroup2);
      }
    });

    return {
      downstreamInGroup: dn,
      upstreamInGroup: up,
    };
  }, [block, blocksByGroupRef, groupsInParent]);

  const isup = upstreamInGroup?.length > 0;
  const isdn = downstreamInGroup?.length > 0;

  const colorName =
    getBlockColor(block?.type ?? BlockTypeEnum.GROUP, { getColorName: true })?.names?.base;

  useEffect(() => {
    const timeout = timeoutRef.current;
    clearTimeout(timeout);
    controls.set({
      opacity: 0,
      ...(LayoutConfigDirectionEnum.HORIZONTAL === layoutConfig?.direction
        ? {
          translateX: 8,
        }
        : {
          translateY: 8,
        }
      ),
    });

    if (phaseRef.current === 0) {
      timeoutRef.current = setTimeout(() => {
        const easing = cubicBezier(.35, .17, .3, .86);
        controls.start({
          opacity: 1,
          transition: {
            delay: (node?.index ?? indexProp) / 10,
            duration: 0.5,
            ease: easing,
          },
          translateX: 0,
          translateY: 0,
        });
        phaseRef.current = 1;
      }, 100);
    }

    return () => {
      clearTimeout(timeout);
      timeoutRef.current = null;
    };
  }, [controls, layoutConfig, node, indexProp]);

  return (
    <Link
      onClick={(event: any) => {
        event.preventDefault();
        dispatchAppEvent(CustomAppEventEnum.TELEPORT_INTO_BLOCK, {
          block,
          event: convertEvent(event),
        });
      }}
      role={role}
      style={{
        height: 'fit-content',
        width: 'fit-content',
      }}
      wrap
    >
      <AnimatePresence>
        <Grid
          borderColor={colorName}
          borders
          padding={12}
          style={{
            backgroundColor: 'var(--backgrounds-body)',
            minWidth: 200,
          }}
        >
          {buildBadgeRow({
            inputColorName: isup && upstreamInGroup?.[0]?.colorName,
            outputColorName: isdn && downstreamInGroup?.[0]?.colorName,
          })}
        </Grid >
        {/* <motion.div animate={controls}>
        </motion.div > */}
      </AnimatePresence>
    </Link>
  );
}
