import { useCallback, useMemo, useReducer } from 'react';
import { sliceReducerLoading } from './reducers';

import { isLoadingSelector } from './selectors';
export default function useLoading() {
  const [loading, dispathLoading] = useReducer(
    sliceReducerLoading.reducer,
    sliceReducerLoading.getInitialState(),
  );
  const isLoading = useMemo(() => {
    return isLoadingSelector(loading);
  }, [loading]);
  const handleLoading = useCallback(() => {
    dispathLoading(sliceReducerLoading.actions.toggleLoading(true));
    return () => {
      dispathLoading(sliceReducerLoading.actions.toggleLoading(false));
    };
  }, []);
  return [isLoading, handleLoading];
}
