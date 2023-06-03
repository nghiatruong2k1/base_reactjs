import { memo, Fragment, useEffect } from 'react';
import { useSelectorGlobal } from '~/states/init';
import { currentTitleSelector } from '~/hooks/useTitle/selectors';
function AppComponent({ children }) {
  useEffect(() => {
    console.log(process.env);
  }, []);
  const title = useSelectorGlobal((state) =>
    currentTitleSelector(state.titles),
  );
  useEffect(() => {
    document.title = `${
      (title !== '' ? title + ' | ' : '') + process.env.REACT_APP_WEBSITE_NAME
    }`;
  }, [title]);
  return <Fragment>{children}</Fragment>;
}
export default memo(AppComponent);
