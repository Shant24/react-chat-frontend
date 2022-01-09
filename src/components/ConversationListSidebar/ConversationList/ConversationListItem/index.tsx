import React, { memo } from 'react';

import cls from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';
import { IDialog } from '../../../../types/dialog';
import { formatDateDistance } from '../../../../helpers/dateHelper';
import Avatar from '../../../Avatar';
import MessageReadStatus from '../../../MessageReadStatus';

interface IDialogueItemItemProps {
  item: IDialog;
}

const ConversationListItem = ({ item }: IDialogueItemItemProps) => {
  const {
    _id,
    fullName: name,
    isOnline,
    message: { user: { fullName, avatar }, text, isRead, created_at },
    unreadCount,
  } = item;

  const isMe = fullName !== name;

  return (
    <NavLink to={`/m/${_id}`} className={({ isActive }) => cls(styles.container, { [styles.active]: isActive })}>
      <div className={styles.userAvatarWrapper}>
        <Avatar fullName={name} avatar={avatar || ''} className={styles.userAvatar} />

        {isOnline && <div className={styles.online} />}
      </div>

      <div className={styles.content}>
        <div className={styles.topPart}>
          <div className={styles.userName}>{name}</div>

          <time className={styles.sentTime}>{formatDateDistance(created_at)}</time>
        </div>

        <div className={styles.bottomPart}>
          <p className={styles.messageText}>{text}</p>

          <MessageReadStatus
            className={cls(styles.readIcon, {
              [styles.unread]: !isMe && !isRead,
              [styles.unreadMore]: !isMe && !isRead && unreadCount > 9,
            })}
            isMe={isMe}
            isRead={isRead}
            unreadCount={unreadCount}
          />
        </div>
      </div>
    </NavLink>
  );
};

export default memo(ConversationListItem);
