import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SearchOptionFace } from '../Option/init.ts';
import { ReactNode } from 'react';

export const sliceReducerHistory = createSlice({
  name: 'history',
  initialState: Array<SearchOptionFace>(),
  reducers: {
    add: (state, { payload }: PayloadAction<SearchOptionFace>) => {
      if (state.length > 10) {
        state.pop();
      }
      if (payload && !state.find((v) => v.value === payload.value)) {
        state.unshift(payload);
      }
    },
  },
});
