import { createSlice } from '@reduxjs/toolkit';
export const sliceReducerTitle = createSlice({
  name: 'titles',
  initialState: Array<string>(),
  reducers: {
    addTitle: (state, { payload }) => {
      state.unshift(payload);
    },
    removeTitle: (state) => {
      state.shift();
    },
  },
});
