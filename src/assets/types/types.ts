import { useMemo } from 'react';
import { typeToast } from './init';
export type TypeFace = keyof typeof typeToast;
export function useType(type: TypeFace, overide?: Function) {
  return useMemo(() => {
    const rs = typeToast[type] || typeToast.default;
    overide && overide(rs);
    return rs;
  }, [type, overide]);
}
