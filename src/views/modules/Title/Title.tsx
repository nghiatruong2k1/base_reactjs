import { ReactNode, Fragment, useEffect ,memo} from 'react';
import { GlobalStateType, useSelectorGlobal } from '~/states';
import { currentTitleSelector } from '~/hooks/useTitle/selectors';
export interface Props {
}
function TitleModule(props: Props) {
  const currentTitle = useSelectorGlobal((state: GlobalStateType) =>
    currentTitleSelector(state.titles),
  );
  useEffect(() => {
    document.title = `${
      (currentTitle !== '' ? currentTitle + ' | ' : '') + process.env.REACT_APP_WEBSITE_NAME
    }`;
  }, [currentTitle]);
  return <Fragment></Fragment>;
}
export default memo(TitleModule)