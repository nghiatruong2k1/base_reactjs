import { useEffect, memo, ReactNode } from 'react';
import { useSelectorGlobal } from '~/stores';
import { currentTitleSelector } from '~/hooks/useTitle/selectors.ts';
interface Props {}

function TitleModule({}: Props) {
  const currentTitle = useSelectorGlobal(currentTitleSelector);
  useEffect(() => {
    document.title = `${
      (currentTitle !== '' ? currentTitle + ' | ' : '') +
      process.env.REACT_APP_WEBSITE_NAME
    }`;
  }, [currentTitle]);

  return <></>;
}
// export { addGlobalTitle };
export default memo(TitleModule);
