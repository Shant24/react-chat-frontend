import React, { memo, useState } from 'react';

import styles from './styles.module.scss';
import { filterObject, sortObject } from '../../helpers/sortingHelper';
import { IDialog } from '../../types/dialog';
import { Button, DialogueItem } from '..';

interface IDialoguesListListProps {
  dialogues: IDialog[];
}

const DialoguesList = ({ dialogues }: IDialoguesListListProps) => {
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
    <div className={styles.dialogListContainer}>
      {dialogues.length > 0 && (
        <Button type="primary" className={styles.filterBtn} onClick={() => setIsShowUnReads(!isShowUnReads)}>
          {isShowUnReads ? 'Show all messages' : 'Show Unread messages'}
        </Button>
      )}

      {sortedDialogs.map((dialog) => (
        <DialogueItem key={dialog._id} {...dialog} />
      ))}
    </div>
  );
};

export default memo(DialoguesList);
