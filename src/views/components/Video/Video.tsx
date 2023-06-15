import { ReactNode, memo, useRef} from 'react';
//---------//
import styles from './Video.module.css';
import { Box } from '@mui/material';

import VideoProvider from './Video.provider.jsx';
import VideoControl from './Control';
import VideoVolume from './Volume';
export interface Props {
  children: ReactNode;
  volumeButton: ReactNode | undefined;
  src: string | undefined;
}

function VideoComponent({ children, volumeButton, src }: Props) {
  const thisRef = useRef<HTMLVideoElement>(null);
  return (
    <VideoProvider>
      <Box className={styles.root}>
        <VideoControl ref={thisRef} src={src} />
        <VideoVolume target={thisRef}>{volumeButton}</VideoVolume>
        {children}
      </Box>
    </VideoProvider>
  );
}
export default memo(VideoComponent);
