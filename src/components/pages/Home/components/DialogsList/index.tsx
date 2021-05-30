import React, { FC } from 'react';

import styles from './styles.module.scss';
import { DialogItem } from '../';
import { IDialog } from '../../../../../types/dialog';

interface IDialogsListProps {
  items: IDialog[];
}

const DialogsList: FC<IDialogsListProps> = ({ items }) => {
  return (
    <div className={styles.dialogListContainer}>
      {items.map((dialog) => (
        <DialogItem key={dialog.id} {...dialog} />
      ))}
    </div>
  );
};

export default DialogsList;
