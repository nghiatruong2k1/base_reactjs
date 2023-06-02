import { memo, Fragment, useEffect } from 'react';
import Fonts from '~/assets/fonts';
import Styles from '~/assets/styles';
import States from '~/states';
import { routers } from './Router';

function AppComponent() {
  useEffect(() => {
    console.log(process.env, routers);
  }, []);
  return (
    <Fragment>
      <Fonts>
        <States>
          <Styles></Styles>
        </States>
      </Fonts>
    </Fragment>
  );
}
export default memo(AppComponent);
