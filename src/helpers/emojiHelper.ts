import { ReactNode } from 'react';

import { toArray } from 'react-emoji-render';

export const parseEmojis = (value: string): string => {
  const emojisArray = toArray(value);

  return emojisArray.reduce((previous: string, current: ReactNode | string) => {
    if (typeof current === 'string') {
      return previous + current;
    }
    return previous + (current as { props: { children: string } }).props.children;
  }, '');
};
