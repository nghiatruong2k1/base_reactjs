import { useCallback, useMemo, useReducer } from 'react';
import { sliceReducerTitle } from './reducer.ts';

import { currentTitleSelector } from './selectors';
export default function useTitle() {
  const [titles, dispathTitle] = useReducer(
    sliceReducerTitle.reducer,
    sliceReducerTitle.getInitialState(),
  );
  const title = useMemo(() => {
    return currentTitleSelector(titles);
  }, [titles]);
  const handleTitle = useCallback((title: string | number | undefined) => {
    dispathTitle(sliceReducerTitle.actions.addTitle(title));
    return () => {
      dispathTitle(sliceReducerTitle.actions.removeTitle());
    };
  }, []);
  return [title, handleTitle];
}
