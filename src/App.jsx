import { memo, Fragment, useEffect } from 'react';
import Fonts from '~/assets/fonts';
import Styles from '~/assets/styles';
import States from '~/states';
import Router from './Router';

function AppComponent() {
  useEffect(() => {
    console.log(process.env);
  }, []);
  return (
    <Fragment>
      <Fonts>
        <States>
          <Styles>
            <Router />
          </Styles>
        </States>
      </Fonts>
    </Fragment>
  );
}
export default memo(AppComponent);
