import { memo, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import './reset.css';
import './OverideMui.css';
import themes from './Theme.module.css';
import { useSelectorGlobal, GlobalStateType } from '~/states';
library.add(fas, far);

function StylesComponent({ children }) {
  const current = useSelectorGlobal((state: GlobalStateType) => state.theme);
  useEffect(() => {
    document.body.classList.add(themes.default, themes[current || 'light']);
  }, [current]);
  return <>{children}</>;
}
export default memo(StylesComponent);
