import { useCallback, useMemo, useReducer } from 'react';
import { sliceReducerTitle } from './reducers.ts';
import { currentTitleSelector } from './selectors.ts';
export default function useTitle(): [string, Function] {
  const [titles, dispathTitle] = useReducer(
    sliceReducerTitle.reducer,
    sliceReducerTitle.getInitialState(),
  );
  const title: string = useMemo(() => {
    return currentTitleSelector({ titles });
  }, [titles]);
  const addTitle: Function = useCallback(
    (title: string | number | undefined) => {
      dispathTitle(sliceReducerTitle.actions.add(title));
      return () => {
        dispathTitle(sliceReducerTitle.actions.remove());
      };
    },
    [],
  );
  return [title, addTitle];
}
