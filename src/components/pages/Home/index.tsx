import React from 'react';

import styles from './styles.module.scss';
import { DialoguesBar, ConversationsPart } from '../..';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        <DialoguesBar />

        <ConversationsPart />
      </div>
    </div>
  );
};

export default Home;
