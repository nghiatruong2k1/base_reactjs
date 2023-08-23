import { useCallback, useMemo, useReducer } from 'react';
import { sliceReducerLoading } from './reducers.ts';
import { isLoadingSelector } from './selectors.ts';
export default function useLoading(): [boolean, Function, Function] {
  const [loading, dispathLoading] = useReducer(
    sliceReducerLoading.reducer,
    sliceReducerLoading.getInitialState(),
  );
  const isLoading: boolean = useMemo(() => {
    return isLoadingSelector({ loading });
  }, [loading]);
  const addLoading: Function = useCallback((key) => {
    dispathLoading(sliceReducerLoading.actions.add(key));
    return () => {
      dispathLoading(sliceReducerLoading.actions.remove(key));
    };
  }, []);
  const removeLoading: Function = useCallback((key) => {
    dispathLoading(sliceReducerLoading.actions.remove(key));
    return () => {
      dispathLoading(sliceReducerLoading.actions.add(key));
    };
  }, []);
  return [isLoading, addLoading, removeLoading];
}
