import { memo, Fragment, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import useGlobalTitle from '~/hooks/useGlobalTitle';
function HomeComponent(props) {
  const { title } = useLoaderData();
  const handelGlobalTitle = useGlobalTitle();
  useEffect(() => {
    return handelGlobalTitle(title);
  }, [title]);
  return (
    <Fragment>
      Home page
    </Fragment>
  );
}
export default memo(HomeComponent);
