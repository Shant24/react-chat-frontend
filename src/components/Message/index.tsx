import React, { FC } from 'react';

import cls from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import usLocale from 'date-fns/locale/en-US';

import styles from './styles.module.scss';
import { ReadIcon, SentIcon } from '../images';

interface IMessageProps {
  user: { name: string };
  isMe: boolean;
  isRead: boolean;
  text: string;
  avatar: string;
  date: Date | string;
  className?: string;
  attachments?: {
    filename: string;
    url: string;
  }[];
}

const Message: FC<IMessageProps> = ({
  user: { name },
  isMe,
  isRead,
  text,
  avatar,
  date,
  className = '',
  attachments,
}) => {
  if (!text) return null;

  return (
    <div className={cls(styles.message, { [className]: className, [styles.isMe]: isMe })}>
      <div className={styles.avatarWrapper}>
        <img src={avatar} alt={`${name} avatar`} />
      </div>

      <div className={styles.messageContent}>
        <div className={styles.bubbleWrapper}>
          <div className={styles.bubble}>
            <p className={styles.text}>{text}</p>
          </div>

          {isMe && !attachments && <div className={styles.readContainer}>{isRead ? <ReadIcon /> : <SentIcon />}</div>}
        </div>

        {attachments && (
          <div className={styles.attachmentsContainer}>
            {attachments.map(({ url, filename }) => (
              <div key={`${url}-${filename}`} className={styles.attachmentWrapper}>
                <img src={url} alt={filename} title={filename} />
              </div>
            ))}
          </div>
        )}

        <time className={styles.date}>
          {formatDistanceToNow(new Date(date), { addSuffix: true, locale: usLocale })}
          {', '}
          {new Date(date).toLocaleTimeString('ru-RU')}
        </time>
      </div>

      {isMe && attachments && (
        <div className={cls(styles.readContainer, styles.withAttach)}>{isRead ? <ReadIcon /> : <SentIcon />}</div>
      )}
    </div>
  );
};

export default Message;
