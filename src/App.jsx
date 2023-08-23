import { memo, Fragment } from 'react';
import Router from '~/Router';
import { TitleModule, LoadingModule } from '~/views/modules';
function AppComponent() {
  return (
    <Fragment>
      <TitleModule />
      <LoadingModule />
      <Router />
    </Fragment>
  );
}
export default memo(AppComponent);
