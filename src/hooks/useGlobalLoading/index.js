import { useCallback } from 'react';
import { useDispatchGlobal } from '~/states/init';
import { sliceReducerLoading } from '~/hooks/useLoading/reducers';
export default function useGlobalLoading(params = []) {
  const dispath = useDispatchGlobal();
  return useCallback(() => {
    dispath(sliceReducerLoading.actions.toggleLoading(true));
    return () => {
      dispath(sliceReducerLoading.actions.toggleLoading(false));
    };
  }, params);
}
