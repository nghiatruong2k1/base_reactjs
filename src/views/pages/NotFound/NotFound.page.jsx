import { memo, Fragment, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Controller } from '~/controllers';
import useGlobalTitle from '~/hooks/useGlobalTitle';
function NotFoundComponent(props) {
  const { title } = useLoaderData();
  const handelGlobalTitle = useGlobalTitle();
  useEffect(() => {
    return handelGlobalTitle(title);
  }, [title]);
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
