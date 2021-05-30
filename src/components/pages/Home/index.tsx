import React, { FC, memo } from 'react';

import { Message } from '../../';
import { DialogsList } from './components';
import Demo from '../../../Demo';

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  // sortByNewest(Demo.dialogsArr, ['message', 'created_at']);

  return (
    <>
      <DialogsList items={Demo.dialogsArr} />

      <div>
        {(Demo.chatMessagesArr || []).map((message) => (
          <Message key={message._id} {...message} />
        ))}
      </div>
    </>
  );
};

export default memo(Home);
