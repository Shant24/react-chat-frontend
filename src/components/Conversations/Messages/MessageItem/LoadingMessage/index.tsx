import React, { memo } from 'react';

import styles from './styles.module.scss';

const LoadingMessage = () => (
  <div className={styles.typingAnimationContainer}>
    <span className={styles.one} />
    <span className={styles.two} />
    <span className={styles.three} />
  </div>
);

export default memo(LoadingMessage);
