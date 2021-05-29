import React, { FC } from 'react';

import cls from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import usLocale from 'date-fns/locale/en-US';

import styles from './styles.module.scss';
import { ReadIcon, SentIcon } from '../images';

interface IMessageProps {
  className?: string;
  user: { name: string };
  text?: string;
  avatar: string;
  date?: Date | string;
  attachments?: {
    filename: string;
    url: string;
  }[];
  isMe: boolean;
  isRead: boolean;
  isTyping?: boolean;
}

const Message: FC<IMessageProps> = ({
  className = '',
  user: { name },
  text,
  avatar,
  date,
  attachments,
  isMe,
  isRead,
  isTyping,
}) => {
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
            <div className={styles.readContainer}>{isRead ? <ReadIcon /> : <SentIcon />}</div>
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

        {date && (
          <time className={styles.date}>
            {formatDistanceToNow(new Date(date), { addSuffix: true, locale: usLocale })}
            {', '}
            {new Date(date).toLocaleTimeString('ru-RU')}
          </time>
        )}
      </div>

      {!isTyping && isMe && attachments && (
        <div className={cls(styles.readContainer, styles.withAttach)}>{isRead ? <ReadIcon /> : <SentIcon />}</div>
      )}
    </div>
  );
};

export default Message;
