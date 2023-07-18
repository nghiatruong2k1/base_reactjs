import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export const sliceReducerTitle = createSlice({
  name: 'titles',
  initialState: Array<string | number>(),
  reducers: {
    add: (state, { payload }: PayloadAction<string | number>) => {
      state.unshift(payload);
    },
    remove: (state) => {
      state.shift();
    },
  },
});
export const { add, remove } = sliceReducerTitle.actions;
export default sliceReducerTitle.reducer;
