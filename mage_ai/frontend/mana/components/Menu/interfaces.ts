import { ClientEventType, FileType } from '../../shared/interfaces';
import { ItemTypeEnum } from './types';
import { KeyboardTextGroupType } from '../../elements/Text/Keyboard/types';

export interface ItemDetailType extends FileType {
  items?: ItemType;
  parent?: ItemDetailType;
  type: ItemTypeEnum;
}

export interface ItemType {
  [key: string]: ItemType | ItemDetailType;
}

export interface MenuItemType {
  Icon?: ({ ...props }: any) => any;
  description?: (() => string) | string;
  divider?: boolean;
  items?: MenuItemType[];
  keyboardShortcuts?: KeyboardTextGroupType;
  label?: (() => string) | string;
  onClick?: (event?: ClientEventType, item?: MenuItemType) => void;
  uuid?: string;
}

export interface MenuGroupType extends MenuItemType {
  group: MenuGroupType;
  index: number;
  level: number;
}
