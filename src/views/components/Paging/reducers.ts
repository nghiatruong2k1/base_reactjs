import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getLocalStore, setLocalStore } from '~/configs/LocalStore.ts';
function InitTotal(num?: any): number {
  const length = Number(num);
  return length > 0 ? length : 0;
}
export const sliceReducerPagingTotal = createSlice({
  name: 'total',
  initialState: InitTotal(),
  reducers: {
    changeTotal: (state, { payload }: PayloadAction<number>) => {
      state = InitTotal(payload);
      return state;
    },
  },
});
export const { changeTotal } = sliceReducerPagingTotal.actions;
export default sliceReducerPagingTotal.reducer;
