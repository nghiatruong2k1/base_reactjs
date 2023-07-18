import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getLocalStore, setLocalStore } from '~/configs/LocalStore.ts';
type ThemeFace = 'light' | 'dark';
export const sliceReducerTheme = createSlice({
  name: 'theme',
  initialState: getLocalStore('theme', 'dark'),
  reducers: {
    change: (state, { payload }: PayloadAction<ThemeFace>) => {
      setLocalStore('theme',payload);
      return payload;
    },
  },
});
export const { change } = sliceReducerTheme.actions;
export default sliceReducerTheme.reducer;