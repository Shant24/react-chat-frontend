import React, { memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';
import { DialoguesBar, ConversationsPart } from '../..';
import { fetchDialogues } from '../../../store/actions/dialoguesAction';
import { fetchMessages } from '../../../store/actions/messagesAction';
import { getDialoguesSelector } from '../../../store/selectors/dialoguesSelector';
import { getMessagesSelector } from '../../../store/selectors/messagesSelector';

const Home = () => {
  const dispatch = useDispatch();
  const { dialogues } = useSelector(getDialoguesSelector);
  const { messages } = useSelector(getMessagesSelector);

  useEffect(() => {
    dispatch(fetchDialogues('token'));
    dispatch(fetchMessages('token'));
  }, [dispatch]);

  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        <DialoguesBar dialogues={dialogues} />

        <ConversationsPart messages={messages} />
      </div>
    </div>
  );
};

export default memo(Home);
