import { useEffect, useMemo, useRef } from 'react';

import Loading from '@mana/components/Loading';
import { EventListeners, addListeners, addListenersForDiff } from './events/addListeners';
import useManager from './useManager';
import { ContainerStyled, IDEStyled } from './index.style';
import { ResourceType } from './interfaces';
import { IDEThemeEnum } from './themes/interfaces';

type IDEProps = {
  containerClassName?: string;
  configurations?: any;
  editorClassName?: string;
  eventListeners?: EventListeners;
  persistManagerOnUnmount?: boolean;
  resource: ResourceType;
  style?: React.CSSProperties;
  theme?: IDEThemeEnum;
  uuid: string;
};

function MateriaIDE({
  configurations: configurationsOverride,
  containerClassName,
  editorClassName,
  eventListeners,
  persistManagerOnUnmount,
  resource,
  style,
  theme: themeSelected,
  uuid,
}: IDEProps) {
  const editorContainerRef = useRef(null);
  const diffEditorRef = useRef(null);
  const editorRef = useRef(null);
  const managerRef = useRef(null);
  const containerRef = useRef(null);

  const wrapperSettings = useMemo(() => ({
    options: {
      configurations: {
        ...configurationsOverride,
        theme: themeSelected,
      },
    },
  }), [configurationsOverride, themeSelected]);
  const manager = useManager(uuid, resource, {
    wrapper: wrapperSettings,
  });

  useEffect(() => {
    if (editorContainerRef?.current && !managerRef.current && manager) {
      const initializeWrapper = async () => {
        managerRef.current = manager;
        await manager.start(editorContainerRef.current);

        if (manager.isUsingDiffEditor()) {
          diffEditorRef.current = manager.getDiffEditor();
          if (diffEditorRef?.current) {
            addListenersForDiff(diffEditorRef?.current, eventListeners);
          }
        } else {
          editorRef.current = manager.getEditor();
          if (editorRef?.current) {
            addListeners(editorRef?.current, eventListeners);
          }
        }
      };

      initializeWrapper();
    }

    const element = containerRef.current;
    if (manager && element && !element.classList.contains('mounted')) {
      if (element) {
        element.classList.add('mounted');
      }
    }

    const instance = managerRef?.current;
    return () => {
      if (instance) {
        if (persistManagerOnUnmount) {
          instance.closeResource();
        } else if (persistManagerOnUnmount) {
          instance.dispose();
          diffEditorRef.current = null;
          editorRef.current = null;
          managerRef.current = null;
        }
      }
    };
  }, [eventListeners, manager, persistManagerOnUnmount]);

  return (
    <ContainerStyled ref={containerRef}>
      <Loading className="ide-loading" />

      <IDEStyled
        className={[
          'ide-container',
          containerClassName ?? '',
        ].filter(Boolean).join(' ')}
      >
        <div className={editorClassName} ref={editorContainerRef} style={style ?? { height: '100vh' }} />
      </IDEStyled>

      <div id={`monaco-suggest-application-root-${uuid}`} />
    </ContainerStyled >
  );
}

export default MateriaIDE;
