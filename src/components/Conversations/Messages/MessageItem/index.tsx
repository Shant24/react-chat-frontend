import React, { memo } from 'react';

import cls from 'classnames';
import ParsedTextWithEmoji from 'react-emoji-render';

import styles from './styles.module.scss';
import { IMessage } from '../../../../types/message';
import { formatDateDistance } from '../../../../helpers/dateHelper';
import Avatar from '../../../Avatar';
import ImageAttachments from './ImageAttachments';
import AudioMessage from './AudioMessage';
import LoadingMessage from './LoadingMessage';
import MessageReadStatus from '../../../MessageReadStatus';

interface IMessageProps extends IMessage {
  className?: string;
}

const Message = (props: IMessageProps) => {
  const {
    className = '',
    user: { fullName },
    text,
    audio,
    avatar,
    date,
    attachments,
    isMe,
    isRead,
    isTyping,
  } = props;

  if (!text && !attachments && !isTyping && !audio) {
    return null;
  }

  return (
    <div
      className={cls(styles.message, className, {
        [styles.isMe]: isMe,
        [styles.isAudio]: audio,
        [styles.isTyping]: isTyping,
      })}
    >
      <Avatar fullName={fullName} avatar={avatar} className={styles.avatarWrapper} />

      <div className={styles.messageContent}>
        <div className={styles.bubbleWrapper}>
          {(text || isTyping || audio) && (
            <div className={styles.bubble}>
              {!isTyping && text && !audio && (
                <p className={styles.text}>
                  <ParsedTextWithEmoji text={text} />
                </p>
              )}

              {!isTyping && audio && (
                <AudioMessage isMe={isMe} audio={audio} />
              )}

              {isTyping && (
                <LoadingMessage />
              )}
            </div>
          )}

          {!isTyping && isMe && !attachments && (
            <MessageReadStatus isMe={isMe} isRead={isRead} className={styles.readContainer} />
          )}
        </div>

        {!isTyping && attachments && (
          <ImageAttachments attachments={attachments} isBigImage={attachments?.length === 1} isMe={isMe} />
        )}

        {!isTyping && date && <time className={styles.date}>{formatDateDistance(date, true)}</time>}
      </div>

      {!isTyping && isMe && attachments && (
        <MessageReadStatus isMe={isMe} isRead={isRead} className={cls(styles.readContainer, styles.withAttachment)} />
      )}
    </div>
  );
};

export default memo(Message);
