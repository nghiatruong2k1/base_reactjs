import { createContext } from 'react';
import {
  ReactReduxContextValue,
  createDispatchHook,
  createSelectorHook,
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { sliceReducerTitle } from '~/hooks/useTitle/reducer.ts';
import { sliceReducerLoading } from '~/hooks/useLoading/reducer.ts';
const reducer = {
  titles: sliceReducerTitle.reducer,
  loading: sliceReducerLoading.reducer,
};
export const GlobalStates = configureStore({ reducer });
export type GlobalStateType = ReturnType<typeof GlobalStates.getState>;
// export const GlobalContext = createContext<ReactReduxContextValue<GlobalStateType>>(
//   GlobalStates.getState(),
// );
export const GlobalContext = createContext<
  ReactReduxContextValue<GlobalStateType>
>(null as any);

export const useDispatchGlobal = createDispatchHook(GlobalContext);
export const useSelectorGlobal = createSelectorHook(GlobalContext);
