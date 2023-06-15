import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getLocalStore, setLocalStore } from '~/configs/LocalStore.ts';
export const sliceReducerVolume = createSlice({
  name: 'volume',
  initialState: getLocalStore('Video_volume', 1),
  reducers: {
    change: (state, { payload }: PayloadAction<number>) => {
      setLocalStore('Video_volume', payload);
      return payload;
    },
  },
});
