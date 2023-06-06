import { useCallback } from 'react';
import { useDispatchGlobal } from '~/states/init';
import { sliceReducerLoading } from '~/hooks/useLoading/reducer';
import { useReducer } from 'react';
export default function useGlobalLoading(datasets, datalist) {
  const [data, changeData] = useReducer();
  const [valid, changeValids] = useReducer();
  return { data, valid };
}
