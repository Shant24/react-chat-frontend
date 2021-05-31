import React, { FC, RefObject, useCallback, useEffect, useRef, useState } from 'react';

import cls from 'classnames';

import styles from './styles.module.scss';
import { AudioWaveIcon, PauseIcon, PlayIcon } from '../images';

interface IAudioMessageProps {
  isMe: boolean;
  audio: string;
}

const AudioMessage: FC<IAudioMessageProps> = ({ isMe, audio }) => {
  const AudioRef = useRef(null) as RefObject<HTMLAudioElement> | null;

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(AudioRef?.current?.duration || 0);
  console.log('duration', duration);

  useEffect(() => {
    if (AudioRef?.current?.duration) {
      setDuration(AudioRef.current.duration);
    }
  }, [AudioRef?.current?.duration]);

  const play = () => {
    setIsPlaying(true);
    AudioRef?.current?.play();
  };

  const pause = useCallback(() => {
    setIsPlaying(false);
    AudioRef?.current?.pause();
  }, []);

  useEffect(() => {
    return () => {
      pause();
    };
  }, [pause]);

  const togglePlay = () => {
    isPlaying ? pause() : play();
  };

  return (
    <div className={styles.audioContainer} onClick={togglePlay}>
      <audio ref={AudioRef} src={audio} preload="true" />

      <div className={styles.audioProgress} style={{ width: `${35}%` }}></div>

      <div className={cls(styles.audioInfo, { [styles.me]: isMe })}>
        <button className={cls(styles.audioBtn, { [styles.playing]: isPlaying, [styles.paused]: !isPlaying })}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        <div className={styles.progressIcon}>
          <AudioWaveIcon />
        </div>

        <time className={styles.audioDuration}>{duration}</time>
      </div>
    </div>
  );
};

export default AudioMessage;
