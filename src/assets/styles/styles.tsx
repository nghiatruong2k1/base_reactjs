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
    document.body.classList.add(themes.default);
  }, []);
  useEffect(() => {
    document.body.classList.add(themes[current]);
    return ()=>{
      document.body.classList.remove(themes[current]);
    }
  }, [current]);
  return <>{children}</>;
}
export default memo(StylesComponent);
