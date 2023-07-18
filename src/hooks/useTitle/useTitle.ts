import { useCallback, useMemo, useReducer } from 'react';
import { sliceReducerTitle, add, remove } from './reducers.ts';

import { currentTitleSelector } from './selectors';
export default function useTitle() {
  const [titles, dispathTitle] = useReducer(
    sliceReducerTitle.reducer,
    sliceReducerTitle.getInitialState(),
  );
  const title = useMemo(() => {
    console.log(titles)
    return currentTitleSelector(titles);
  }, [titles]);
  const handleTitle = useCallback((title: string | number | undefined) => {
    dispathTitle(add(title));
    return () => {
      dispathTitle(remove());
    };
  }, []);
  return [title, handleTitle];
}
