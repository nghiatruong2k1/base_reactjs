import { ReactNode, Fragment, useEffect } from 'react';
import { GlobalStateType, useSelectorGlobal } from '~/states';
import { currentTitleSelector } from '~/hooks/useTitle/selectors';
export interface Props {
  children: ReactNode;
}
export default function TitlePartial({ children }: Props) {
  const title = useSelectorGlobal((state: GlobalStateType) =>
    currentTitleSelector(state.titles),
  );
  useEffect(() => {
    document.title = `${
      (title !== '' ? title + ' | ' : '') + process.env.REACT_APP_WEBSITE_NAME
    }`;
  }, [title]);
  return <Fragment>{children}</Fragment>;
}
