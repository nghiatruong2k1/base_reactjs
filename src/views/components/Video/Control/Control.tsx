import { Fragment, useCallback,useEffect, memo,forwardRef } from 'react';
//---------//
import { useId } from '@mantine/hooks';
import styles from '../Video.module.css';
import { VideoStateType, useDispatchVideo, useSelectorVideo } from '../init.ts';

import { sliceReducerPlay } from '../PlayButton/reducers.ts';
import { sliceReducerVolume } from '../Volume/reducers.ts';

export interface Props {
  src: string;
}

function VideoControl({ src = '' }: Props, ref) {
  const id = useId();
  const playId = useSelectorVideo((state: VideoStateType) => 
    state.playId
  );
  const dispath = useDispatchVideo();
  const handlePlay = useCallback((e) => {
    dispath(sliceReducerPlay.actions.play(e.target.id));
  }, []);
  const handlePause = useCallback(() => {
    //dispath(sliceReducerPlay.actions.pause());
  }, []);
  const handleChangeVolume = useCallback((e)=>{
    dispath(sliceReducerVolume.actions.change(e.target.volume));
  },[])
  useEffect(() => {
    if (ref.current) {
      if (playId === id) {
        ref.current?.play();
      }
      return function () {
        ref.current?.pause();
      };
    }
  }, [playId]);

  return (
    <Fragment>
      {
        <video
          id={id}
          controls
          ref={ref}
          src={src}
          onPlay={handlePlay}
          onPause={handlePause}
          onVolumeChange={handleChangeVolume}
          className={styles.video}
        />
      }
    </Fragment>
  );
}
export default memo(forwardRef(VideoControl));
