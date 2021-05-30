import React, { FC, useState } from 'react';

import styles from './styles.module.scss';
import { DialogItem } from '../';
import { IDialog } from '../../../../../types/dialog';
import { filterObject, sortObject } from '../../../../../helpers/sorting';

interface IDialogsListProps {
  items: IDialog[];
}

const DialogsList: FC<IDialogsListProps> = ({ items }) => {
  const [isShowUnReads, setIsShowUnReads] = useState(false);
  const sortedItems: IDialog[] = sortObject(
    isShowUnReads
      ? filterObject(
          items,
          (dialog: IDialog) => !dialog.message.isRead && dialog.fullName === dialog.message.user.fullName,
        )
      : items,
    [(dialog: IDialog) => dialog.message.created_at],
    true,
  );

  return (
    <div className={styles.dialogListContainer}>
      <button
        style={{ margin: '10px auto', width: '70%', height: '40px' }}
        onClick={() => setIsShowUnReads(!isShowUnReads)}
      >
        {isShowUnReads ? 'Show all messages' : 'Show Unread messages'}
      </button>
      {sortedItems.map((dialog) => (
        <DialogItem key={dialog._id} {...dialog} />
      ))}
    </div>
  );
};

export default DialogsList;
