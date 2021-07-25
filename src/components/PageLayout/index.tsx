import React, { CSSProperties, FC } from 'react';

import styles from './styles.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
import useDarkMode from '../../hooks/useDarkMode';

const PageLayout: FC = ({ children }) => {
  const { width, height } = useWindowSize();
  const { isDarkMode } = useDarkMode(false);

  const pageWrapperStyle = {
    maxWidth: width,
    width,
    maxHeight: height,
    height,
    '--100vw': `${width}px`,
    '--100vh': `${height}px`,
  } as CSSProperties;

  return (
    <div className={styles.app} style={pageWrapperStyle} data-theme={isDarkMode ? 'dark' : 'light'}>
      {children}
    </div>
  );
};

export default PageLayout;
