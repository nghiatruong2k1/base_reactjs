import { memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//---------//
import { rootElement } from '~/index';
interface Props {
  target?: HTMLElement;
}
function ScrollToView({ target = rootElement }: Props) {
  const location = useLocation();
  useEffect(() => {
    if (target) {
      target.scrollTop = 0;
      target.scrollLeft = 0;
    }
  }, [target, location]);
  return <></>;
}
export default memo(ScrollToView);
