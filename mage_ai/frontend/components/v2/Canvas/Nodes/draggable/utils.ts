import styles from '@styles/scss/components/Canvas/Nodes/BlockNode.module.scss';
import stylesBuilder from '@styles/scss/apps/Canvas/Pipelines/Builder.module.scss';
import { ElementRoleEnum } from '@mana/shared/types';
import { NodeItemType } from '../../interfaces';
import { nodeClassNames } from '../utils';

export function draggableProps({
  classNames,
  draggable,
  droppable,
  emptyGroup,
  excludeClassNames,
  requiredGroup,
  node,
  loading,
}: {
  classNames?: string[];
  draggable?: boolean;
  droppable?: boolean;
  emptyGroup?: boolean;
  excludeClassNames?: string[];
  requiredGroup?: boolean;
  node: NodeItemType;
  loading?: boolean;
}) {
  return {
    className: [
      styles.blockNodeWrapper,
      stylesBuilder.level,
      stylesBuilder[`level-${node?.level}`],
      node?.type && stylesBuilder[node?.type],
      !emptyGroup && !draggable && !droppable && styles.showOnHoverContainer,
      loading && styles.loading,
      styles.container,
      requiredGroup && styles.requiredGroup,
      ...(classNames ?? []),
      // Class names reserved for the SettingsManager to determine what is visible
      // based on the selected groups.
      ...nodeClassNames(node),
    ]?.filter(cn => Boolean(cn) && (!excludeClassNames || !excludeClassNames.includes(cn)))?.join(' '),
    draggable,
    droppable,
    role: ElementRoleEnum.BLOCK,
  };
}
