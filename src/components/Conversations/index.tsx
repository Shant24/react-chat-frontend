import React, { memo, RefObject, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import { Empty, Spin } from 'antd';
// import SimpleBarReact from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';

import styles from './styles.module.scss';
import { IMessage } from '../../types/message';
import { Message } from '..';
import { isLoadingMessagesSelector } from '../../store/selectors/messagesSelector';
import CustomScrollbar from '../CustomScrollbar';

interface IConversationsProps {
  items: IMessage[];
  roomId?: string;
}

const Conversations = ({ items, roomId }: IConversationsProps) => {
  const ScrollbarsRef = useRef(null) as RefObject<HTMLDivElement> | null;
  const isLoading = useSelector(isLoadingMessagesSelector);

  useEffect(() => {
    if (ScrollbarsRef) {
      ScrollbarsRef.current?.scrollTo({ top: ScrollbarsRef.current.scrollHeight });
    }
  }, [ScrollbarsRef, items]);

  return (
    <div className={styles.conversationsList}>
      <CustomScrollbar ref={ScrollbarsRef} className={styles.conversationsWrapper} autoHide>
        {/* {isLoading && <Spin className={styles.messagesStatusContainer} size="large" tip="Loading messages" />}

        {!isLoading && !roomId && <Empty className={styles.messagesStatusContainer} description="Open the dialogue" />}

        {!isLoading && roomId && !items.length && (
          <Empty className={styles.messagesStatusContainer} description="No messages" />
        )}

        {!isLoading &&
          roomId &&
          !!items.length &&
          items.map((message, index) => (
            <Message key={message._id} {...message} scrollTo={items.length + 1 === index} />
          ))} */}

        {/* {isLoading ? (
          <Spin className={styles.messagesStatusContainer} size="large" tip="Loading messages" />
        ) : roomId && !!items.length ? (
          items.map((message, index) => (
            <Message key={message._id} {...message} scrollTo={items.length + 1 === index} />
          ))
        ) : (
          <Empty
            className={styles.messagesStatusContainer}
            description={roomId && !items.length ? 'No messages' : 'Open the dialogue'}
          />
        )} */}
        <div className={styles.messagesWrapper}>
          {isLoading ? (
            <Spin className={styles.messagesStatusContainer} size="large" tip="Loading messages" />
          ) : roomId && !!items.length ? (
            items.map((message, index) => (
              <Message key={message._id} {...message} scrollTo={items.length + 1 === index} />
            ))
          ) : (
            <Empty
              className={styles.messagesStatusContainer}
              description={roomId && !items.length ? 'No messages' : 'Open the dialogue'}
            />
          )}
        </div>
      </CustomScrollbar>
    </div>
  );
};

export default memo(Conversations);
