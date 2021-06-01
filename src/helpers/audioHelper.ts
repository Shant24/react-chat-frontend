import intervalToDuration from 'date-fns/intervalToDuration';

const addZero = (time: number) => `0${time}`.slice(-2);

export const getProgress = (duration: number, currentTime: number) => {
  if (currentTime === duration) return 0;
  return (currentTime / duration) * 100;
};

export const getTimeDuration = (duration: number, currentTime: number) => {
  let expectedDuration = duration - currentTime;
  if (currentTime === duration) {
    expectedDuration = duration;
  }
  return formatDuration(expectedDuration);
};

export const formatDuration = (duration: number) => {
  const interval = { start: new Date(new Date().getTime() - duration * 1000), end: new Date() };
  const { hours, minutes, seconds } = intervalToDuration(interval);

  const minSec = `${addZero(minutes || 0)}:${addZero(seconds || 0)}`;
  return hours ? `${addZero(hours)}:${minSec}` : minSec;
};
