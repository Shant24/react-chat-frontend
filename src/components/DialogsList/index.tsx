import React, { FC, useState } from 'react';

import styles from './styles.module.scss';
import { filterObject, sortObject } from '../../helpers/sorting';
import { IDialog } from '../../types/dialog';
import { Button, DialogItem } from '../';

interface IDialogsListProps {
  items: IDialog[];
}

const DialogsList: FC<IDialogsListProps> = ({ items }) => {
  const [isShowUnReads, setIsShowUnReads] = useState(false);

  const dialogs: IDialog[] = isShowUnReads
    ? filterObject(
        items,
        (dialog: IDialog) => !dialog.message.isRead && dialog.fullName === dialog.message.user.fullName,
      )
    : items;

  const sortedDialogs: IDialog[] = sortObject(dialogs, [(dialog: IDialog) => dialog.message.created_at], true);

  return (
    <div className={styles.dialogListContainer}>
      {items.length > 0 && (
        <Button type="primary" className={styles.filterBtn} onClick={() => setIsShowUnReads(!isShowUnReads)}>
          {isShowUnReads ? 'Show all messages' : 'Show Unread messages'}
        </Button>
      )}

      {sortedDialogs.map((dialog) => (
        <DialogItem key={dialog._id} {...dialog} />
      ))}
    </div>
  );
};

export default DialogsList;
