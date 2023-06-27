import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export const sliceReducerQuery = createSlice({
  name: 'query',
  initialState: '',
  reducers: {
    change: (state, { payload }:PayloadAction<string>) => {
      return payload;
    },
  },
});
