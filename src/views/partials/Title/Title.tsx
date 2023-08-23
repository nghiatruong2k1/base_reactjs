import { memo, useEffect } from 'react';
import { useGlobalTitle } from '~/hooks';
interface Props {
  children: string;
}
function TitlePartial({ children }: Props) {
  const handleTitle = useGlobalTitle();
  useEffect(() => {
    return handleTitle(children);
  }, [children]);
  return <></>;
}
export default memo(TitlePartial);
