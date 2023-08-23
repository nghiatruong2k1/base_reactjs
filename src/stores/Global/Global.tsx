import { memo } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { GlobalStates, GlobalContext } from './init.ts';
function GlobalStatesComponent({ children }) {
  return (
    <ReduxProvider context={GlobalContext} store={GlobalStates}>
      {children}
    </ReduxProvider>
  );
}
export default memo(GlobalStatesComponent);
