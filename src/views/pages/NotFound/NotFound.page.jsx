import { memo, Fragment, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GetAction } from '~/configs/Route.ts';
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
        <Link to={GetAction(Controller['Home'])}>Trang chủ</Link>
      </div>
      <div>
        <Link to={GetAction(Controller["NotFound"])}>Not Found</Link>
      </div>
    </Fragment>
  );
}
export default memo(NotFoundComponent);
