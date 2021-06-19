import React, { memo, RefObject, useRef, useState, useEffect } from 'react';

import { Badge, Button, Input, Tooltip } from 'antd';
import { TeamOutlined, FormOutlined, SearchOutlined, LoadingOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';
import { noop } from 'lodash';

import styles from './styles.module.scss';
import { filterObject, sortObject } from '../../helpers/sortingHelper';
import { IDialog } from '../../types/dialog';
import { DialogueItem } from '..';

interface IDialoguesBarProps {
  dialogues: IDialog[];
}

const DialoguesBar = ({ dialogues }: IDialoguesBarProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isShowUnReads, setIsShowUnReads] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const ScrollbarsRef = useRef(null) as RefObject<Scrollbars> | null;

  useEffect(() => {
    if (ScrollbarsRef) {
      ScrollbarsRef.current?.scrollToTop();
    }
  }, [ScrollbarsRef, dialogues, isShowUnReads]);

  const filteredDialogues: IDialog[] = filterObject(
    dialogues,
    (dialog: IDialog) => !dialog.message.isRead && dialog.fullName === dialog.message.user.fullName,
  );

  const sortedDialogues: IDialog[] = sortObject(
    isShowUnReads ? filteredDialogues : dialogues,
    [(dialog: IDialog) => dialog.message.created_at],
    true,
  );

  useEffect(() => {
    if (isShowUnReads && !filteredDialogues.length) {
      setIsShowUnReads(false);
    }
  }, [isShowUnReads, filteredDialogues.length]);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleCreateClick = noop;

  return (
    <div className={styles.dialoguesBarContainer}>
      <div className={styles.dialoguesHeader}>
        <div className={styles.conversationsListText}>
          <TeamOutlined className={styles.listIcon} />

          <span>List of conversations</span>
        </div>

        <Button
          type="link"
          shape="circle"
          className={styles.createNewConversationBtn}
          icon={<FormOutlined className={styles.createNewConversationIcon} />}
          onClick={handleCreateClick}
        />
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

        {!!filteredDialogues.length && (
          <div className={styles.filterBtnContainer}>
            <Tooltip placement="top" title={isShowUnReads ? 'All messages' : 'Unread messages'}>
              <Badge dot={!isShowUnReads}>
                <div className={styles.filterBtnWrapper} onClick={() => setIsShowUnReads(!isShowUnReads)}>
                  <UnorderedListOutlined />
                </div>
              </Badge>
            </Tooltip>
          </div>
        )}
      </div>

      <Scrollbars ref={ScrollbarsRef} className={styles.dialoguesList} autoHide>
        {sortedDialogues.map((item) => (
          <DialogueItem key={item._id} {...item} />
        ))}
      </Scrollbars>
    </div>
  );
};

export default memo(DialoguesBar);
