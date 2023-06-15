import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getLocalStore, setLocalStore } from '~/configs/LocalStore.ts';
export const sliceReducerPlay = createSlice({
  name: 'playId',
  initialState: getLocalStore('Video_playId', ''),
  reducers: {
    play: (state, { payload }: PayloadAction<string>) => {
      setLocalStore('Video_playId', payload);
      return payload;
    },
  },
});
