import React, { FC } from 'react';

import cls from 'classnames';

import styles from './styles.module.scss';
import { IDialog } from '../../../../../types/dialog';
import { formatDateDistance } from '../../../../../helpers/formatDate';
import { MessageReadStatusIcon } from '../../../../';
import { NavLink } from 'react-router-dom';

interface IDialogItemProps extends IDialog {}

const DialogItem: FC<IDialogItemProps> = ({
  id,
  user: { fullName, avatar, isOnline },
  lastMessage: { senderName, text, isRead, created_at },
  unreadCount,
}) => {
  const isMe = senderName !== fullName;

  return (
    <NavLink to={`/m/${id}`} className={styles.dialogItemContainer} activeClassName={styles.active}>
      <div className={styles.userAvatarWrapper}>
        <div className={styles.userAvatar}>
          {avatar && <img src={avatar} alt={`${fullName.split(' ')[0]} avatar`} />}
        </div>
        {isOnline && <div className={styles.online} />}
      </div>

      <div className={styles.dialogContent}>
        <div className={styles.topPart}>
          <div className={styles.userName}>{fullName}</div>

          <time className={styles.sentTime}>{formatDateDistance(created_at)}</time>
        </div>

        <div className={styles.bottomPart}>
          <p className={styles.messageText}>{text}</p>

          <div
            className={cls(styles.readIcon, {
              [styles.unread]: !isMe && !isRead,
              [styles.unreadMore]: !isMe && !isRead && unreadCount > 9,
            })}
          >
            <MessageReadStatusIcon isMe={isMe} isRead={isRead} unreadCount={unreadCount} />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default DialogItem;
