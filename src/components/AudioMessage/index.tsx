import React, { memo, RefObject, useCallback, useEffect, useRef, useState } from 'react';

import cls from 'classnames';

import styles from './styles.module.scss';
import { getProgress, getTimeDuration } from '../../helpers/audioHelper';
import { AudioWaveIcon, PauseIcon, PlayIcon } from '../images';

interface IAudioMessageProps {
  isMe: boolean;
  audio: string;
}

const AudioMessage = ({ isMe, audio }: IAudioMessageProps) => {
  const AudioRef = useRef(null) as RefObject<HTMLAudioElement> | null;
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const handleInitAudioData = useCallback(() => {
    if (AudioRef?.current) {
      setDuration(AudioRef?.current?.duration);
      setCurrentTime(AudioRef?.current?.currentTime);
    }
  }, [AudioRef]);

  const handleTimeUpdate = useCallback(() => {
    if (AudioRef?.current) {
      setCurrentTime(AudioRef?.current?.currentTime);
    }
  }, [AudioRef]);

  const handlePlay = () => {
    setIsPlaying(true);
    AudioRef?.current?.play();
  };

  const handlePause = useCallback(() => {
    setIsPlaying(false);
    AudioRef?.current?.pause();
  }, [AudioRef]);

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
  }, [handlePause, AudioRef, handleInitAudioData, handleTimeUpdate]);

  return (
    <div className={cls(styles.audioContainer, { [styles.isMe]: isMe })} onClick={togglePlay}>
      <audio ref={AudioRef} src={audio} preload="metadata" />

      <div className={styles.audioProgress} style={{ width: `${getProgress(duration, currentTime)}%` }} />

      <div className={styles.audioInfo}>
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
