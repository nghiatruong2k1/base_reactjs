import { memo } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { VideoContext, VideoStates } from './init.ts';

function VideoStatesComponent({ children }) {
  return (
    <ReduxProvider context={VideoContext} store={VideoStates}>
      {children}
    </ReduxProvider>
  );
}

export default memo(VideoStatesComponent);
