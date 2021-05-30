import React, { FC } from 'react';

import cls from 'classnames';

import styles from './styles.module.scss';
import { IMessage } from '../../types/message';
import { formatDateDistance } from '../../helpers/formatDate';
import { MessageReadStatusIcon } from '../';

interface IMessageProps extends IMessage {
  className?: string;
}

const Message: FC<IMessageProps> = (props) => {
  const {
    className = '',
    user: { name },
    text,
    avatar,
    date,
    attachments,
    isMe,
    isRead,
    isTyping,
  } = props;

  if (!text && !attachments && !isTyping) return null;

  return (
    <div
      className={cls(styles.message, {
        [className]: className,
        [styles.isMe]: isMe,
        [styles.isTyping]: isTyping,
        [styles.bigImage]: !text && attachments?.length === 1,
      })}
    >
      <div className={styles.avatarWrapper}>
        <img src={avatar} alt={`${name} avatar`} />
      </div>

      <div className={styles.messageContent}>
        <div className={styles.bubbleWrapper}>
          {(text || isTyping) && (
            <div className={styles.bubble}>
              {text && <p className={styles.text}>{text}</p>}
              {isTyping && (
                <div className={styles.typingAnimationContainer}>
                  <span className={styles.one} />
                  <span className={styles.two} />
                  <span className={styles.three} />
                </div>
              )}
            </div>
          )}

          {!isTyping && isMe && !attachments && (
            <div className={styles.readContainer}>
              <MessageReadStatusIcon isMe={isMe} isRead={isRead} />
            </div>
          )}
        </div>

        {!isTyping && attachments && (
          <div className={styles.attachmentsContainer}>
            {attachments.map(({ url, filename }) => (
              <div
                key={`${url}-${filename}`}
                className={cls(styles.attachmentWrapper, { [styles.big]: attachments.length === 1 })}
              >
                <img src={url} alt={filename} title={filename} />
              </div>
            ))}
          </div>
        )}

        {date && <time className={styles.date}>{formatDateDistance(date, true)}</time>}
      </div>

      {!isTyping && isMe && attachments && (
        <div className={cls(styles.readContainer, styles.withAttach)}>
          <MessageReadStatusIcon isMe={isMe} isRead={isRead} />
        </div>
      )}
    </div>
  );
};

export default Message;
