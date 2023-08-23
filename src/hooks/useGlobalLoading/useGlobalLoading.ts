import { useCallback } from 'react';
import { useDispatchGlobal } from '~/stores/Global/init.ts';
import { add, remove } from '~/hooks/useLoading/reducers.ts';
export default function useGlobalLoading() {
  const dispath = useDispatchGlobal();
  return useCallback((key: string) => {
    dispath(add(key));
    return () => {
      dispath(remove(key));
    };
  }, [dispath]);
}
