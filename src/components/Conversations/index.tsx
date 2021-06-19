import React, { memo, RefObject, useRef } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';
import { EllipsisOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import { IMessage } from '../../types/message';
import { Message, OnlineStatus } from '..';
import { sortObject } from '../../helpers/sortingHelper';
import { useEffect } from 'react';

interface IConversationsProps {
  messages: IMessage[];
  conversationData?: any;
}

const Conversations = ({ messages, conversationData = {} }: IConversationsProps) => {
  const { isOnline = true } = conversationData;
  const ScrollbarsRef = useRef(null) as RefObject<Scrollbars> | null;

  useEffect(() => {
    if (ScrollbarsRef) {
      ScrollbarsRef.current?.scrollToBottom();
    }
  }, [ScrollbarsRef, messages]);

  const sortedMessages: IMessage[] = sortObject(messages, [(message: IMessage) => message.date], false);

  return (
    <div className={styles.conversationsContainer}>
      <div className={styles.conversationsHeader}>
        <div className={styles.conversationWith}>
          {/* TODO: integrate with backend */}
          <div className={styles.name}>{'Shant Sargsyan'}</div>

          <OnlineStatus isOnline={isOnline} showIcon />
        </div>

        <div className={styles.conversationOptions}>
          <EllipsisOutlined />
        </div>
      </div>

      <div className={styles.conversationsList}>
        <Scrollbars ref={ScrollbarsRef} className={styles.conversationsWrapper} autoHide>
          {sortedMessages.map((message, index) => (
            <Message key={message._id} {...message} scrollTo={sortedMessages.length + 1 === index} />
          ))}
        </Scrollbars>
      </div>
    </div>
  );
};

export default memo(Conversations);
