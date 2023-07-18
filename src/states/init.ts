import { createContext } from 'react';
import {
  ReactReduxContextValue,
  createDispatchHook,
  createSelectorHook,
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import titles from '~/hooks/useTitle/reducers.ts';
import loading from '~/hooks/useLoading/reducers.ts';
import theme from '~/assets/styles/reducers.ts';
const reducer = {
  titles,
  loading,
  theme,
};
export const GlobalStates = configureStore({ reducer });
export type GlobalStateType = ReturnType<typeof GlobalStates.getState>;
export const GlobalContext = createContext<
  ReactReduxContextValue<GlobalStateType>
>(null as any);

export const useDispatchGlobal = createDispatchHook(GlobalContext);
export const useSelectorGlobal = createSelectorHook(GlobalContext);
