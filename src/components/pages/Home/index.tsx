import React, { memo, useEffect, useState } from 'react';

import styles from './styles.module.scss';
import demo from '../../../demo';
import { DialoguesBar, ConversationsPart } from '../..';
import { IDialog } from '../../../types/dialog';
import { IMessage } from '../../../types/message';

const Home = () => {
  const [dialogues, setDialogues] = useState<IDialog[]>(demo.dialogsArr);
  const [messages, setMessages] = useState<IMessage[]>(demo.chatMessagesArr);

  const getData = async () => {
    fetch('http://localhost:3003/dialogues')
      .then((res) => res.json())
      .then((response) => setDialogues(response));

    fetch('http://localhost:3003/messages')
      .then((res) => res.json())
      .then((response) => setMessages(response));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        <DialoguesBar dialogues={dialogues} />

        <ConversationsPart messages={messages} />
      </div>
    </div>
  );
};

export default memo(Home);
