import { memo, Fragment, useEffect } from 'react';
import { useSelectorGlobal } from '~/states/init';
import { currentTitleSelector } from '~/hooks/useTitle/selectors';
import Router from './Router';
function AppComponent() {
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
  return (
    <Fragment>
      <Router />
    </Fragment>
  );
}
export default memo(AppComponent);
