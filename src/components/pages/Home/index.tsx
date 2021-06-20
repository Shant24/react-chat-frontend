import React, { memo } from 'react';

import styles from './styles.module.scss';
import demo from '../../../demo';
import { DialoguesBar, ConversationsPart } from '../..';

const Home = () => (
  <div className={styles.homePage}>
    <div className={styles.container}>
      <DialoguesBar dialogues={demo.dialogsArr} />

      <ConversationsPart messages={demo.chatMessagesArr} />
    </div>
  </div>
);

export default memo(Home);
