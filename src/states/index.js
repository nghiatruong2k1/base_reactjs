import { memo, Fragment } from 'react';
function StateComponent({ children }) {
  return <Fragment>{children}</Fragment>;
}
export default memo(StateComponent);
