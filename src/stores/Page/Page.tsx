import { ReactNode, memo } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

import { useGlobalTitle } from '~/hooks';
import { PageContext } from './init.ts';
interface Props<T> {
  children: ReactNode;
  store?: ToolkitStore<T, AnyAction>;
}
function PageStatesComponent({ children, store }: Props<any>) {
  return (
    <ReduxProvider context={PageContext} store={store}>
      {children}
    </ReduxProvider>
  );
}
export default memo(PageStatesComponent);
