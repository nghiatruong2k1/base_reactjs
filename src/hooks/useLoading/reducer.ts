import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export const sliceReducerLoading = createSlice({
  name: 'loading',
  initialState: 0,
  reducers: {
    toggleLoading: (state,{payload}:PayloadAction<boolean>) => {
      if (payload) {
        return state + 1;
      } else {
        return state - 1;
      }
    },
  },
});
