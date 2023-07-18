import { useCallback, useMemo, useReducer } from 'react';
import { sliceReducerLoading, toggle } from './reducers.ts';
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
    dispathLoading(toggle(true));
    return () => {
      dispathLoading(toggle(false));
    };
  }, []);
  return [isLoading, handleLoading];
}
