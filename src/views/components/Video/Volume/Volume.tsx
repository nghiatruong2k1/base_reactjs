import { Fragment, ReactNode, memo, useEffect, MutableRefObject } from 'react';
//---------//
import styles from '../Video.module.css';
import { VideoStateType, useSelectorVideo } from '../init.ts';

export interface Props {
  target: MutableRefObject<HTMLVideoElement>;
  children: ReactNode | undefined;
}

function VideoVolume({children, target }: Props) {
  const volume = useSelectorVideo((state: VideoStateType) => state.volume);
  useEffect(() => {
    if (target.current) {
      target.current.volume = volume;
    }
  }, [volume]);
  return <Fragment>{children}</Fragment>;
}
export default memo(VideoVolume);
