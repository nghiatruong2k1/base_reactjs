import { memo, Fragment } from 'react'; 
import './fontawesome/fontawesome.css'
import './fontawesome/fontawesome.animation.css'
import './times/times.css'
function FontComponent({ children }) {
  return <Fragment>{children}</Fragment>;
}
export default memo(FontComponent);
