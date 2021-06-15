import React, { memo, useState } from 'react';

import { Input } from 'antd';
import { TeamOutlined, FormOutlined, SearchOutlined, LoadingOutlined } from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './styles.module.scss';
import { filterObject, sortObject } from '../../helpers/sortingHelper';
import { IDialog } from '../../types/dialog';
import { Button, DialogueItem } from '..';

interface IDialoguesBarProps {
  dialogues: IDialog[];
}

const DialoguesBar = ({ dialogues }: IDialoguesBarProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isShowUnReads, setIsShowUnReads] = useState<boolean>(false);

  const filteredDialogues: IDialog[] = isShowUnReads
    ? filterObject(
        dialogues,
        (dialog: IDialog) => !dialog.message.isRead && dialog.fullName === dialog.message.user.fullName,
      )
    : dialogues;

  const sortedDialogues: IDialog[] = sortObject(
    filteredDialogues,
    [(dialog: IDialog) => dialog.message.created_at],
    true,
  );

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

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
        <Input
          className={styles.searchInput}
          value={searchValue}
          placeholder="Search in the contacts"
          disabled={loading}
          allowClear
          prefix={
            loading ? <LoadingOutlined /> : <SearchOutlined className={styles.searchIcon} onClick={handleSearch} />
          }
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className={styles.filterBtnContainer}>
        {dialogues.length > 0 && (
          <Button type="primary" className={styles.filterBtn} onClick={() => setIsShowUnReads(!isShowUnReads)}>
            {isShowUnReads ? 'Show all messages' : 'Show Unread messages'}
          </Button>
        )}
      </div>

      <Scrollbars className={styles.dialoguesList} autoHide>
        {sortedDialogues.map((item) => (
          <DialogueItem key={item._id} {...item} />
        ))}
      </Scrollbars>
    </div>
  );
};

export default memo(DialoguesBar);
