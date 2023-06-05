import { memo, Fragment } from 'react';
import Router from '~/Router';
import { MesageModule } from '~/views/modules';
import { MessagePartial, TitlePartial } from '~/views/partials';
function AppComponent() {
  return (
    <Fragment>
      <MesageModule>
        <TitlePartial />
        <MessagePartial />
        <Router />
      </MesageModule>
    </Fragment>
  );
}
export default memo(AppComponent);
