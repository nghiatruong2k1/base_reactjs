import { createContext } from 'react';
import {
  ReactReduxContextValue,
  createDispatchHook,
  createSelectorHook,
} from 'react-redux';
export const PageContext = createContext<ReactReduxContextValue<any>>(null as any);
export const useDispatchPage = createDispatchHook(PageContext);
export const useSelectorPage = createSelectorHook(PageContext);
