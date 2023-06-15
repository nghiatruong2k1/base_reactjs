import { createContext } from 'react';
import {
  ReactReduxContextValue,
  createDispatchHook,
  createSelectorHook,
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useContext } from 'react';

import { sliceReducerPlay } from './PlayButton/reducers.ts';
import { sliceReducerVolume } from './Volume/reducers.ts';

const reducer = {
  playId: sliceReducerPlay.reducer,
  volume: sliceReducerVolume.reducer,
};
export const VideoStates = configureStore({ reducer });
export type VideoStateType = ReturnType<typeof VideoStates.getState>;
export const VideoContext = createContext<
  ReactReduxContextValue<VideoStateType>
>(null as any);

export const useDispatchVideo = createDispatchHook(VideoContext);
export const useSelectorVideo = createSelectorHook(VideoContext);

export const CurrentVideoContext = createContext({});
export function useCurrentVideoContext() {
  return useContext(CurrentVideoContext);
}
