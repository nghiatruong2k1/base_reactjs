import { createContext } from 'react';
import {
  ReactReduxContextValue,
  createDispatchHook,
  createSelectorHook,
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { sliceReducerTitle } from '~/hooks/useTitle/reducers.ts';
import { sliceReducerLoading } from '~/hooks/useLoading/reducers.ts';
import { sliceReducerTheme } from '~/assets/styles/reducers.ts';
const reducer = {
  [sliceReducerTitle.name]: sliceReducerTitle.reducer,
  [sliceReducerLoading.name]: sliceReducerLoading.reducer,
  [sliceReducerTheme.name]: sliceReducerTheme.reducer,
};
export const GlobalStates = configureStore({ reducer });
export type GlobalStateType = ReturnType<typeof GlobalStates.getState>;
export const GlobalContext = createContext<
  ReactReduxContextValue<GlobalStateType>
>(null as any);

export const useDispatchGlobal = createDispatchHook(GlobalContext);
export const useSelectorGlobal = createSelectorHook(GlobalContext);
