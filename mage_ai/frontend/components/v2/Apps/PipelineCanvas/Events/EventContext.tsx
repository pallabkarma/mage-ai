import React, { createContext } from 'react';
import { ClientEventType, RectType } from '@mana/shared/interfaces';
import { MenuItemType } from '@mana/components/Menu/interfaces';
import { RenderContextMenuOptions, RemoveContextMenuType } from '@mana/hooks/useContextMenu';
import { FrameworkType } from '@interfaces/PipelineExecutionFramework/interfaces';
import { ExecutionManagerType } from '../../../ExecutionManager/interfaces';
import BlockType from '@interfaces/BlockType';

interface EventContextType {
  animateLineRef: React.MutableRefObject<(from: string, to?: string, opts?: { stop?: boolean }) => void>;
  handleContextMenu?: (
    event: ClientEventType,
    items?: MenuItemType[],
    opts?: RenderContextMenuOptions,
  ) => void;
  handleMouseDown: (event: MouseEvent) => void;
  removeContextMenu: RemoveContextMenuType;
  renderLineRef: React.MutableRefObject<(rect: RectType) => void>;
  setSelectedGroup: (group: FrameworkType | BlockType) => void;
  useExecuteCode: ExecutionManagerType['useExecuteCode'];
  useRegistration: ExecutionManagerType['useRegistration'];
}

export const EventContext = createContext<EventContextType | undefined>(undefined);

interface EventProvider extends EventContextType {
  children: React.ReactNode;
}

export const EventProvider: React.FC<EventProvider> = ({ children, ...props }: EventProvider) => (
  <EventContext.Provider value={props}>{children}</EventContext.Provider>
);
