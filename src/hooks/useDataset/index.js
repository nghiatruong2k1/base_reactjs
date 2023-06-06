import { useCallback, useReducer } from 'react';
export default function useDataset(datasets, datalist) {
  const [data, changeData] = useReducer();
  const [valid, changeValids] = useReducer();
  return { data, valid, handler: {} };
}
