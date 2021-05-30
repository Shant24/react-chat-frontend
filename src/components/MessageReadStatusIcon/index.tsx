import React, { FC, memo } from 'react';

import { ReadIcon, SentIcon } from '../images';

interface IMessageReadStatusIconProps {
  isMe: boolean;
  isRead: boolean;
  unreadCount?: number;
}

const MessageReadStatusIcon: FC<IMessageReadStatusIconProps> = ({ isMe, isRead, unreadCount = 0 }) => {
  if (isRead && isMe) return <ReadIcon />;
  if (isMe) return <SentIcon />;
  if (isRead) return <ReadIcon />;
  return unreadCount ? <>{unreadCount > 9 ? '+9' : unreadCount}</> : null;
};

export default memo(MessageReadStatusIcon);
