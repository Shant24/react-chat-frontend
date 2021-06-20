import React, { memo, RefObject, useEffect, useRef } from 'react';

import Scrollbars from 'react-custom-scrollbars';
import { Empty } from 'antd';

import styles from './styles.module.scss';
import { IMessage } from '../../types/message';
import { Message } from '..';

interface IConversationsProps {
  items: IMessage[];
}

const Conversations = ({ items }: IConversationsProps) => {
  const ScrollbarsRef = useRef(null) as RefObject<Scrollbars> | null;

  useEffect(() => {
    if (ScrollbarsRef) {
      ScrollbarsRef.current?.scrollToBottom();
    }
  }, [ScrollbarsRef, items]);

  return (
    <div className={styles.conversationsList}>
      <Scrollbars ref={ScrollbarsRef} className={styles.conversationsWrapper} autoHide>
        <div className={styles.messagesWrapper}>
          {!!items.length ? (
            items.map((message, index) => (
              <Message key={message._id} {...message} scrollTo={items.length + 1 === index} />
            ))
          ) : (
            <Empty className={styles.emptyMessageContainer} description="No Messages" />
          )}
        </div>
      </Scrollbars>
    </div>
  );
};

export default memo(Conversations);
