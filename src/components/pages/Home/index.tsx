import React, { memo } from 'react';

import styles from './styles.module.scss';
import demo from '../../../demo';
import { DialoguesList, Conversations } from '../../';

const Home = () => (
  <div className={styles.homeContainer}>
    <DialoguesList dialogues={demo.dialogsArr} />

    <Conversations messages={demo.chatMessagesArr} />
  </div>
);

export default memo(Home);
