import React, { memo, ReactElement } from 'react';

import { ReadIcon, SentIcon } from '../images';

interface IMessageReadStatus {
  isMe: boolean;
  isRead: boolean;
  className?: string;
  unreadCount?: number;
}

const MessageReadStatus = ({ isMe, isRead, className, unreadCount = 0 }: IMessageReadStatus) => {
  const getIcon = (): ReactElement | number | string | null => {
    if (isRead && isMe) return <ReadIcon />;
    if (isMe) return <SentIcon />;
    if (isRead) return <ReadIcon />;
    return unreadCount ? <>{unreadCount > 9 ? '+9' : unreadCount}</> : null;
  };

  return <div {...(className ? { className } : {})}>{getIcon()}</div>;
};

export default memo(MessageReadStatus);
