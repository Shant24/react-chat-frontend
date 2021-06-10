import React, { memo } from 'react';

import styles from './styles.module.scss';
import { IMessage } from '../../types/message';
import { Message } from '..';

interface IConversationsProps {
  messages: IMessage[];
}

const Conversations = ({ messages }: IConversationsProps) => (
  <div className={styles.conversationsContainer}>
    {messages.map((message) => (
      <Message key={message._id} {...message} />
    ))}
  </div>
);

export default memo(Conversations);
