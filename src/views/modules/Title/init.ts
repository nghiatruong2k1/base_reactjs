import { createContext, useContext } from 'react';
export interface GlobalTitleContextFace {
  addGlobalTitle: Function;
}
export declare const addGlobalTitle: GlobalTitleContextFace['addGlobalTitle'];

export const GlobalTitleContext = createContext<any>({
  addGlobalTitle: () => {},
});
export function useGlobalTitle(): GlobalTitleContextFace {
  return useContext(GlobalTitleContext);
}
