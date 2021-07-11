import React, { useState, useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Badge, Button, Input, Tooltip } from 'antd';
import { TeamOutlined, FormOutlined, SearchOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { noop } from 'lodash';

import styles from './styles.module.scss';
import { filterObject, sortObject } from '../../helpers/sortingHelper';
import { IDialog } from '../../types/dialog';
import { getDialoguesSelector } from '../../store/selectors/dialoguesSelector';
import { fetchDialogues } from '../../store/actions/dialoguesAction';
import Dialogues from '../Dialogues';

const DialoguesBar = () => {
  const dispatch = useDispatch();
  const dialogues = useSelector(getDialoguesSelector);
  const [searchValue, setSearchValue] = useState<string>('');
  const [hasUnread, setHasUnread] = useState(false);
  const [isShowUnReads, setIsShowUnReads] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchDialogues());
  }, [dispatch]);

  const filteredDialogues: IDialog[] = useMemo(
    () =>
      filterObject(
        dialogues,
        (dialog: IDialog) => !dialog.message.isRead && dialog.fullName === dialog.message.user.fullName,
      ),
    [dialogues],
  );

  const sortedDialogues: IDialog[] = useMemo(() => {
    let unread = false;
    let sorted: IDialog[] = sortObject(
      isShowUnReads ? filteredDialogues : dialogues,
      [(dialog: IDialog) => dialog.message.created_at],
      true,
    );

    if (searchValue) {
      sorted = filterObject(
        sorted,
        (dialog: IDialog) => dialog.fullName.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) >= 0,
      );
    }

    sorted.forEach((dialog) => {
      if (!dialog.message.isRead && dialog.fullName === dialog.message.user.fullName) {
        unread = true;
      }
    });

    setHasUnread(unread);
    return sorted;
  }, [dialogues, filteredDialogues, isShowUnReads, searchValue]);

  useEffect(() => {
    if (isShowUnReads && !filteredDialogues.length) {
      setIsShowUnReads(false);
    }
  }, [isShowUnReads, filteredDialogues.length]);

  return (
    <div className={styles.dialoguesBarContainer}>
      <div className={styles.dialoguesBarTopPart}>
        <div className={styles.dialoguesHeader}>
          <div className={styles.conversationsListText}>
            <TeamOutlined className={styles.listIcon} />

            <span>List of dialogue</span>
          </div>

          <Button
            type="link"
            shape="circle"
            className={styles.createNewConversationBtn}
            icon={<FormOutlined className={styles.createNewConversationIcon} />}
            onClick={noop}
          />
        </div>

        <div className={styles.dialoguesSearchContainer}>
          <Input
            className={styles.searchInput}
            value={searchValue}
            placeholder="Search in the contacts"
            allowClear
            prefix={<SearchOutlined className={styles.searchIcon} />}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          {((!searchValue && !!filteredDialogues.length) || (searchValue && hasUnread)) && (
            <Badge className={styles.filterBtnContainer} dot={!isShowUnReads}>
              <Tooltip title={isShowUnReads ? 'All messages' : 'Unread messages'} placement="top">
                <div className={styles.filterBtnWrapper} onClick={() => setIsShowUnReads(!isShowUnReads)}>
                  <UnorderedListOutlined />
                </div>
              </Tooltip>
            </Badge>
          )}
        </div>
      </div>

      <Dialogues items={sortedDialogues} isShowUnReads={isShowUnReads} />
    </div>
  );
};

export default DialoguesBar;
