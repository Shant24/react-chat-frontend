import React, { memo } from 'react';

import { EllipsisOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import { IMessage } from '../../types/message';
import { Conversations, OnlineStatus, SendMessageInput } from '..';
import { sortObject } from '../../helpers/sortingHelper';

interface IConversationsPartProps {
  messages: IMessage[];
  conversationData?: any;
}

const ConversationsPart = ({ messages, conversationData = {} }: IConversationsPartProps) => {
  const { isOnline = true } = conversationData;

  const sortedMessages: IMessage[] = sortObject(messages, [(message: IMessage) => message.date], false);

  return (
    <div className={styles.conversationsContainer}>
      <div className={styles.conversationsHeader}>
        <div className={styles.conversationWith}>
          <div className={styles.name}>
            {/* TODO: integrate with backend */}
            Shant Sargsyan
          </div>

          <OnlineStatus isOnline={isOnline} showIcon />
        </div>

        <div className={styles.conversationOptions}>
          <EllipsisOutlined />
        </div>
      </div>

      <Conversations items={sortedMessages} />

      <SendMessageInput />
    </div>
  );
};

export default memo(ConversationsPart);
