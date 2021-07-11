import React, { memo, RefObject, useEffect, useRef } from 'react';

import cls from 'classnames';
import { useSelector } from 'react-redux';
import { Empty, Spin } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './styles.module.scss';
import { IMessage } from '../../types/message';
import { Message } from '..';
import { isLoadingMessagesSelector } from '../../store/selectors/messagesSelector';

interface IConversationsProps {
  items: IMessage[];
  roomId?: string;
}

const Conversations = ({ items, roomId }: IConversationsProps) => {
  const ScrollbarsRef = useRef(null) as RefObject<Scrollbars> | null;
  const isLoading = useSelector(isLoadingMessagesSelector);

  useEffect(() => {
    if (ScrollbarsRef?.current && isLoading && roomId && !!items.length) {
      setTimeout(() => {
        ScrollbarsRef.current?.scrollToBottom();
      }, 0);
    }
  }, [ScrollbarsRef, items, roomId, isLoading]);

  return (
    <Scrollbars ref={ScrollbarsRef} className={styles.conversationsContainer} autoHide>
      <div
        className={cls(styles.conversationsWrapper, {
          [styles.loading]: isLoading,
          [styles.empty]: !isLoading && !items.length,
        })}
      >
        {isLoading ? (
          <Spin className={styles.messagesStatusContainer} size="large" tip="Loading messages" />
        ) : roomId && !!items.length ? (
          items.map((message, index) => (
            <Message key={message._id} {...message} scrollTo={items.length + 1 === index} />
          ))
        ) : (
          <Empty description={roomId ? 'No messages' : 'Open the dialogue'} />
        )}
      </div>
    </Scrollbars>
  );
};

export default memo(Conversations);
