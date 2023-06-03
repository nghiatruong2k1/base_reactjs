import { memo, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Controller } from '~/controllers';
function NotFoundComponent(props) {
  return (
    <Fragment>
      NotFound page
      <div>
        <Link to={Controller.home.getAction()}>Trang chủ</Link>
      </div>
      <div>
        <Link to={Controller.notfound.getAction()}>Not Found</Link>
      </div>
    </Fragment>
  );
}
export default memo(NotFoundComponent);
