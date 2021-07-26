import { ReactNode } from 'react';

import { toArray } from 'react-emoji-render';

export const parseEmojis = (value: string): string => {
  const emojisArray: (ReactNode | string)[] = toArray(value);

  return emojisArray.reduce((previous: ReactNode | string, current) => {
    if (typeof current === 'string') {
      return previous + current;
    }
    return previous + (current as { props: { children: string } }).props.children;
  }, '') as string;
};
