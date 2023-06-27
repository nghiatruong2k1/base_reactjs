import { memo } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { SearchContext, SearchStates } from './init.ts';
function SearchStatesComponent({ children }) {
  return (
    <ReduxProvider context={SearchContext} store={SearchStates}>
      {children}
    </ReduxProvider>
  );
}

export default memo(SearchStatesComponent);
