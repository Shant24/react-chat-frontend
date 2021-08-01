import React from 'react';

import styles from './styles.module.scss';
import DialoguesBar from '../../ConversationListSidebar';
import ConversationsPart from '../../Conversations';


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
