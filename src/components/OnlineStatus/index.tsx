import React, { memo } from 'react';

import cls from 'classnames';

import styles from './styles.module.scss';

interface IOnlineStatusProps {
  isOnline: boolean;
  className?: string;
  showIcon?: boolean;
}

const OnlineStatus = ({ isOnline, className, showIcon }: IOnlineStatusProps) => (
  <div
    className={cls(styles.onlineStatusContainer, className, {
      [styles.online]: showIcon && isOnline,
      [styles.offline]: showIcon && !isOnline,
    })}
  >
    <span className={styles.statusName}>{isOnline ? 'online' : 'offline'}</span>
  </div>
);

export default memo(OnlineStatus);
