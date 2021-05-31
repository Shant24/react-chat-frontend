import React from 'react';

import styles from './styles.module.scss';

const LoadingMessage = () => {
  return (
    <div className={styles.typingAnimationContainer}>
      <span className={styles.one} />
      <span className={styles.two} />
      <span className={styles.three} />
    </div>
  );
};

export default LoadingMessage;
