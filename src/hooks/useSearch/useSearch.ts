import { Reducer, useEffect, useReducer } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnyAction } from 'redux';
type stateType = { [k: string]: any };
export default function useSearch(
  initState: stateType = {},
  reducer: Reducer<stateType, AnyAction>,
): [stateType, Function] {
  const [_, setSearch] = useSearchParams();
  const [state, dispath] = useReducer(reducer, initState);
  useEffect(() => {
    setSearch(state);
  }, [setSearch, state]);
  return [state, dispath];
}
