import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export const sliceReducerTitle = createSlice({
  name: 'titles',
  initialState: Array<string | number>(),
  reducers: {
    addTitle: (state, { payload }:PayloadAction<string | number>) => {
      state.unshift(payload);
    },
    removeTitle: (state) => {
      state.shift();
    },
  },
});
