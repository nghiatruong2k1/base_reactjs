import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export const sliceReducerLoading = createSlice({
  name: 'loading',
  initialState: {},
  reducers: {
    add: (state, { payload }: PayloadAction<string>) => {
      if (typeof state[payload] === 'number') {
        state[payload] += 1;
      } else {
        state[payload] = 1;
      }
      return state;
    },
    remove: (state, { payload }: PayloadAction<string>) => {
      if (state[payload] > 0) {
        state[payload] -= 1;
      }
      return state;
    },
  },
});
export const { add, remove } = sliceReducerLoading.actions;
export default sliceReducerLoading.reducer;
