import { createContext } from 'react';
import {
  ReactReduxContextValue,
  createDispatchHook,
  createSelectorHook,
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { sliceReducerHistory } from './History/reducers.ts';
import { sliceReducerQuery } from './Input/reducers.ts';
export const reducer = {
  [sliceReducerQuery.name]: sliceReducerQuery.reducer,
  [sliceReducerHistory.name]: sliceReducerHistory.reducer,
};
export const SearchStates = configureStore({ reducer });
export type SearchStateType = ReturnType<typeof SearchStates.getState>;

export const SearchContext = createContext<
  ReactReduxContextValue<SearchStateType>
>(null as any);

export const useDispatchSearch = createDispatchHook(SearchContext);
export const useSelectorSearch = createSelectorHook(SearchContext);
