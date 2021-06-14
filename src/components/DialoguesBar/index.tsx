import React, { memo, useState } from 'react';

import { TeamOutlined, FormOutlined, SearchOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import { filterObject, sortObject } from '../../helpers/sortingHelper';
import { IDialog } from '../../types/dialog';
import { Button, DialogueItem } from '..';

interface IDialoguesBarProps {
  dialogues: IDialog[];
}

const DialoguesBar = ({ dialogues }: IDialoguesBarProps) => {
  const [isShowUnReads, setIsShowUnReads] = useState(false);

  const filteredDialogues: IDialog[] = isShowUnReads
    ? filterObject(
        dialogues,
        (dialog: IDialog) => !dialog.message.isRead && dialog.fullName === dialog.message.user.fullName,
      )
    : dialogues;

  const sortedDialogs: IDialog[] = sortObject(
    filteredDialogues,
    [(dialog: IDialog) => dialog.message.created_at],
    true,
  );

  return (
    <div className={styles.dialoguesBarContainer}>
      <div className={styles.dialoguesHeader}>
        <div className={styles.conversationsListText}>
          <TeamOutlined className={styles.listIcon} />

          <span>List of conversations</span>
        </div>

        <FormOutlined className={styles.createNewConversationIcon} />
      </div>

      <div className={styles.dialoguesSearchContainer}>
        <div className={styles.inputWrapper}>
          <SearchOutlined />

          <input type="text" placeholder="Search in contacts" />
        </div>
      </div>

      <div className={styles.filterBtnContainer}>
        {dialogues.length > 0 && (
          <Button type="primary" className={styles.filterBtn} onClick={() => setIsShowUnReads(!isShowUnReads)}>
            {isShowUnReads ? 'Show all messages' : 'Show Unread messages'}
          </Button>
        )}
      </div>

      <div className={styles.dialoguesList}>
        {sortedDialogs.map((dialog) => (
          <DialogueItem key={dialog._id} {...dialog} />
        ))}
      </div>
    </div>
  );
};

export default memo(DialoguesBar);
