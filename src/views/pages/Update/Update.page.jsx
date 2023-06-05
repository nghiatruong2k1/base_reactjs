import { memo, Fragment, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import useGlobalTitle from '~/hooks/useGlobalTitle';
function UpdateComponent(props) {
  const { title } = useLoaderData();
  const handelGlobalTitle = useGlobalTitle();
  useEffect(() => {
    return handelGlobalTitle(title);
  }, [title]);
  return (
    <Fragment>
      Update page
    </Fragment>
  );
}
export default memo(UpdateComponent);
