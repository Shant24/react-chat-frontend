import React, { FC, memo } from 'react';

import { Message } from '../../';
import { DialogsList } from './components';
import Demo from '../../../Demo';

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  return (
    <>
      <DialogsList items={Demo.dialogsArr || []} />

      <div>
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
