import React, { FC, memo } from 'react';

import demo from '../../../demo';
import { DialogsList } from '../../';
import { Message } from '../../';

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  // sortByNewest(demo.dialogsArr, ['message', 'created_at']);

  return (
    <>
      <DialogsList items={demo.dialogsArr} />

      <div>
        {(demo.chatMessagesArr || []).map((message) => (
          <Message key={message._id} {...message} />
        ))}
      </div>
    </>
  );
};

export default memo(Home);
