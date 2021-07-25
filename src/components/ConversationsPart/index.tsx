import React, { memo, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EllipsisOutlined from '@ant-design/icons/EllipsisOutlined';

import styles from './styles.module.scss';
import { IMessage } from '../../types/message';
import { sortObject } from '../../helpers/sortingHelper';
import { fetchMessages, removeMessages } from '../../store/actions/messagesAction';
import { getAllMessagesSelector } from '../../store/selectors/messagesSelector';
import { getDialogueById } from '../../store/selectors/dialoguesSelector';
import { Conversations, OnlineStatus, SendMessageInput } from '..';

const ConversationsPart = () => {
  const dispatch = useDispatch();
  const { id }: { id?: string } = useParams();

  const messages = useSelector(getAllMessagesSelector);
  const dialogueRoom = useSelector(getDialogueById(id));

  useEffect(() => {
    if (id) {
      dispatch(removeMessages());
      dispatch(fetchMessages(id));
    } else {
      dispatch(removeMessages());
    }
  }, [dispatch, id]);

  const sortedMessages: IMessage[] = sortObject(messages, [(message: IMessage) => message.date], false);

  return (
    <div className={styles.conversationsContainer}>
      <div className={styles.conversationsHeader}>
        {dialogueRoom && (
          <div className={styles.conversationWithPersonContainer}>
            <div className={styles.name}>{dialogueRoom.fullName}</div>

            <OnlineStatus isOnline={dialogueRoom.isOnline} showIcon />
          </div>
        )}

        <div className={styles.conversationOptions}>
          <EllipsisOutlined />
        </div>
      </div>

      <Conversations items={sortedMessages} roomId={id} />

      {dialogueRoom && <SendMessageInput />}
    </div>
  );
};

export default memo(ConversationsPart);
