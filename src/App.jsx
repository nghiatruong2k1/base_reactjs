import { memo, Fragment, useEffect } from 'react';
import Fonts from '~/assets/fonts';
import Styles from '~/assets/styles';
import States from '~/states';
function AppComponent({ children }) {
  useEffect(() => {
    console.log(process.env);
  }, []);
  return (
    <Fragment>
      <Fonts>
        <States>
          <Styles>{children}</Styles>
        </States>
      </Fonts>
    </Fragment>
  );
}
export default memo(AppComponent);
