import { memo, Fragment, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import './reset.css';
import themes from './Theme.module.css';
library.add(fas, far);
function StylesComponent({ children }) {
  useEffect(() => {
    document.body.classList.add(themes.default, themes.light);
  }, []);
  return <Fragment>{children}</Fragment>;
}
export default memo(StylesComponent);
