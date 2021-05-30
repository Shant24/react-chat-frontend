import React, { FC, memo } from 'react';

import { Message } from '../../';
import { DialogItem } from './components';
import Demo from '../../../Demo';

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  return (
    <>
      <div style={{ margin: '0 0 20px' }}>
        {(Demo.dialogsArr || []).map((dialog) => (
          <DialogItem key={dialog.id} dialog={dialog} />
        ))}
      </div>

      <div style={{ width: '100vw' }}>
        {(Demo.chatMessagesArr || []).map(({ id, user, isMe, isRead, text, avatar, date, attachments, isTyping }) => (
          <Message
            key={id}
            id={id}
            user={user}
            isMe={isMe}
            isRead={isRead}
            text={text}
            avatar={avatar}
            date={date}
            attachments={attachments}
            isTyping={isTyping}
          />
        ))}
      </div>
    </>
  );
};

export default memo(Home);
