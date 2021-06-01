import React, { memo, RefObject, useCallback, useEffect, useRef, useState } from 'react';

import cls from 'classnames';

import styles from './styles.module.scss';
import { AudioWaveIcon, PauseIcon, PlayIcon } from '../images';
import { getProgress, getTimeDuration } from '../../helpers/audioHelper';

interface IAudioMessageProps {
  isMe: boolean;
  audio: string;
}

const AudioMessage = ({ isMe, audio }: IAudioMessageProps) => {
  let AudioRef = useRef(null) as RefObject<HTMLAudioElement> | null;

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const handleInitAudioData = () => {
    if (AudioRef?.current) {
      setDuration(AudioRef?.current?.duration);
      setCurrentTime(AudioRef?.current?.currentTime);
    }
  };

  const handleTimeUpdate = () => {
    if (AudioRef?.current) {
      setCurrentTime(AudioRef?.current?.currentTime);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    AudioRef?.current?.play();
  };

  const handlePause = useCallback(() => {
    setIsPlaying(false);
    AudioRef?.current?.pause();
  }, []);

  const togglePlay = () => {
    isPlaying ? handlePause() : handlePlay();
  };

  useEffect(() => {
    const audioCurrent = AudioRef?.current;

    audioCurrent?.addEventListener('loadedmetadata', handleInitAudioData);
    audioCurrent?.addEventListener('timeupdate', handleTimeUpdate);
    audioCurrent?.addEventListener('ended', handlePause);
    return () => {
      audioCurrent?.removeEventListener('loadedmetadata', handleInitAudioData);
      audioCurrent?.removeEventListener('timeupdate', handleTimeUpdate);
      audioCurrent?.removeEventListener('ended', handlePause);
      handlePause();
    };
  }, [handlePause]);

  return (
    <div className={styles.audioContainer} onClick={togglePlay}>
      <audio ref={AudioRef} src={audio} preload="metadata" />

      <div className={styles.audioProgress} style={{ width: `${getProgress(duration, currentTime)}%` }}></div>

      <div className={cls(styles.audioInfo, { [styles.me]: isMe })}>
        <button className={cls(styles.audioBtn, { [styles.playing]: isPlaying, [styles.paused]: !isPlaying })}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        <div className={styles.progressIcon}>
          <AudioWaveIcon />
        </div>

        <time className={styles.audioDuration}>{getTimeDuration(duration, currentTime)}</time>
      </div>
    </div>
  );
};

export default memo(AudioMessage);
