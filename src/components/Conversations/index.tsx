import React, { memo } from 'react';

import cls from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import { EllipsisOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import { IMessage } from '../../types/message';
import { Message } from '..';

interface IConversationsProps {
  messages: IMessage[];
  conversationData?: any;
}

const Conversations = ({ messages, conversationData = {} }: IConversationsProps) => {
  const { isOnline = true } = conversationData;

  return (
    <div className={styles.conversationsContainer}>
      <div className={styles.conversationsHeader}>
        <div className={styles.conversationWith}>
          {/* TODO: integrate with backend */}
          <div className={styles.name}>{'Shant Sargsyan'}</div>

          <div className={styles.onlineStatus}>
            <span className={cls(styles.statusIcon, { [styles.online]: isOnline, [styles.offline]: !isOnline })} />

            <span className={styles.statusName}>{isOnline ? 'online' : 'offline'}</span>
          </div>
        </div>

        <div className={styles.conversationOptions}>
          <EllipsisOutlined />
        </div>
      </div>

      <Scrollbars className={styles.conversationsList} autoHide>
        {messages.map((message, index) => (
          <Message key={message._id} {...message} scrollTo={index + 1 === messages.length} />
        ))}
      </Scrollbars>
    </div>
  );
};

export default memo(Conversations);
