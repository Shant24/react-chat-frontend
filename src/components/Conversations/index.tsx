import React, { memo, RefObject, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import Scrollbars from 'react-custom-scrollbars';
import { Empty, Spin } from 'antd';

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
    if (ScrollbarsRef) {
      ScrollbarsRef.current?.scrollToBottom();
    }
  }, [ScrollbarsRef, items]);

  return (
    <div className={styles.conversationsList}>
      <Scrollbars ref={ScrollbarsRef} className={styles.conversationsWrapper} autoHide>
        <div className={styles.messagesWrapper}>
          {isLoading ? (
            <Spin className={styles.messagesStatusContainer} size="large" tip="Loading messages" />
          ) : roomId && !!items.length ? (
            items.map((message) => (
              <Message key={message._id} {...message} /> /* scrollTo={items.length + 1 === index} */
            ))
          ) : (
            <Empty
              className={styles.messagesStatusContainer}
              description={roomId && !items.length ? 'No messages' : 'Open the dialogue'}
            />
          )}
        </div>
      </Scrollbars>
    </div>
  );
};

export default memo(Conversations);
