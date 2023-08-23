import { useCallback } from 'react';
import { useDispatchGlobal } from '~/stores';
import { add, remove } from '~/hooks/useTitle/reducers.ts';
export default function useGlobalTitle() {
  const dispath = useDispatchGlobal();
  return useCallback((title: string) => {
    dispath(add(title));
    return () => {
      dispath(remove());
    };
  }, [dispath]);
}
