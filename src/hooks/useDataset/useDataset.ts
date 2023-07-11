import { useCallback, useState } from 'react';
export default function useDataset(initData) {
  const [data, setData] = useState(initData);
  const [valids, setValids] = useState([]);
  const changeData = useCallback((value) => {
    if (value) {
      setData(value);
    } else {
      setData(initData);
    }
  }, []);
  const changeValids = useCallback((error) => {
    if (error) {
      setValids(['error']);
    } else {
      setValids([]);
    }
  }, []);
  return { data, valids, changeData, changeValids };
}
