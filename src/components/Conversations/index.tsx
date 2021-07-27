import React, { memo, useEffect, useRef } from 'react';

import cls from 'classnames';
import { useSelector } from 'react-redux';
import Empty from 'antd/lib/empty';
import Spin from 'antd/lib/spin';
// @ts-ignore
import { Scrollbars } from "@manychat/react-custom-scrollbars";

import styles from './styles.module.scss';
import { IMessage } from '../../types/message';
import { isLoadingMessagesSelector } from '../../store/selectors/messagesSelector';
import { Message } from '..';

interface IConversationsProps {
  items: IMessage[];
  roomId?: string;
}

const Conversations = ({ items, roomId }: IConversationsProps) => {
  const ScrollbarsRef = useRef<Scrollbars>(null);
  const isLoading = useSelector(isLoadingMessagesSelector);

  useEffect(() => {
    if (ScrollbarsRef?.current && isLoading && roomId && !!items.length) {
      setTimeout(() => {
        ScrollbarsRef.current?.scrollToBottom();
      }, 0);
    }
  }, [ScrollbarsRef, items, roomId, isLoading]);

  return (
    <Scrollbars ref={ScrollbarsRef} className={styles.conversationsScrollableContainer} autoHide>
      <div
        className={cls(styles.conversationsWrapper, {
          [styles.loading]: isLoading,
          [styles.empty]: !isLoading && !items.length,
        })}
      >
        {isLoading ? (
          <Spin className={styles.messagesStatusContainer} size="large" tip="Loading messages" />
        ) : roomId && !!items.length ? (
          items.map((message) => (
            <Message key={message._id} {...message} /> // scrollTo={items.length + 1 === index}
          ))
        ) : (
          <Empty className={styles.emptyData} description={roomId ? 'No messages' : 'Open the dialogue'} />
        )}
      </div>
    </Scrollbars>
  );
};

export default memo(Conversations);
