import { memo, Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TitlePartial } from '~/views/partials';
function UpdateComponent(props) {
  const { title } = useLoaderData();
  return (
    <Fragment>
      <TitlePartial>{title}</TitlePartial>
    </Fragment>
  );
}
export default memo(UpdateComponent);
