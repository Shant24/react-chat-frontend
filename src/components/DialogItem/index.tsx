import React, { FC, memo } from 'react';

import cls from 'classnames';

import styles from './styles.module.scss';
import { IDialog } from '../../types/dialog';
import { formatDateDistance } from '../../helpers/dateHelper';
import { MessageReadStatus } from '..';
import { NavLink } from 'react-router-dom';
import Avatar from '../Avatar';

interface IDialogItemProps extends IDialog {}

const DialogItem: FC<IDialogItemProps> = (props) => {
  const {
    _id,
    fullName: name,
    isOnline,
    message: {
      text,
      isRead,
      created_at,
      user: { fullName, avatar },
    },
    unreadCount,
  } = props;

  const isMe = fullName !== name;

  return (
    <NavLink to={`/m/${_id}`} className={styles.dialogItemContainer} activeClassName={styles.active}>
      <div className={styles.userAvatarWrapper}>
        <Avatar fullName={name} avatar={avatar || ''} className={styles.userAvatar} />

        {isOnline && <div className={styles.online} />}
      </div>

      <div className={styles.dialogContent}>
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

export default memo(DialogItem);
