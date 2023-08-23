import { createContext, useContext } from 'react';
export interface GlobalLoadingContextFace {
  addGlobalLoading: Function;
  removeGlobalLoading: Function;
}
export declare const addGlobalLoading: GlobalLoadingContextFace['addGlobalLoading'];
export declare const removeGlobalLoading: GlobalLoadingContextFace['removeGlobalLoading'];

export const GlobalLoadingContext = createContext<GlobalLoadingContextFace>({
  addGlobalLoading: () => {},
  removeGlobalLoading: () => {},
});
export function useGlobalLoading(): GlobalLoadingContextFace {
  return useContext(GlobalLoadingContext);
}
