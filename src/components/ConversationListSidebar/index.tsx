import React, { useState, useEffect, useMemo, memo } from 'react';

import cls from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import Badge from 'antd/lib/badge';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Tooltip from 'antd/lib/tooltip';
import TeamOutlined from '@ant-design/icons/TeamOutlined';
import FormOutlined from '@ant-design/icons/FormOutlined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import UnorderedListOutlined from '@ant-design/icons/UnorderedListOutlined';

import styles from './styles.module.scss';
import { IDialog } from '../../types/dialog';
import useDarkMode from '../../hooks/useDarkMode';
import { filterObject, sortObject } from '../../helpers/sortingHelper';
import { getDialoguesSelector } from '../../store/selectors/dialoguesSelector';
import { fetchDialogues } from '../../store/actions/dialoguesAction';
import { MoonIcon, SunIcon } from '../images';
import ConversationList from './ConversationList';

const ConversationListSidebar = () => {
  const dispatch = useDispatch();
  const dialogues = useSelector(getDialoguesSelector);
  const { isDarkMode, toggle } = useDarkMode();
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
    <div className={styles.conversationListSidebarContainer}>
      <div className={styles.topPart}>
        <div className={styles.topPartHeader}>
          <div className={styles.conversationListText}>
            <TeamOutlined className={styles.listIcon} />

            <span>List of dialogue</span>
          </div>

          <div className={styles.topButtonsContainer}>
            <Tooltip title="Switch dark mode">
              <Button type="link" shape="circle" className={styles.darkModeSwitcherContainer} onClick={toggle}>
                <span className={cls(styles.darkModeIconWrapper, { [styles.isShown]: isDarkMode })}>
                  <MoonIcon />
                </span>

                <span className={cls(styles.darkModeIconWrapper, { [styles.isShown]: !isDarkMode })}>
                  <SunIcon />
                </span>
              </Button>
            </Tooltip>

            <Tooltip title="Create new conversation">
              <Button
                type="link"
                shape="circle"
                className={styles.createNewConversationBtn}
                icon={<FormOutlined className={styles.createNewConversationIcon} />}
              />
            </Tooltip>
          </div>
        </div>

        <div className={styles.searchContainer}>
          <Input
            className={styles.searchInput}
            value={searchValue}
            placeholder="Search in the contacts"
            allowClear
            prefix={<SearchOutlined />}
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

      <ConversationList items={sortedDialogues} isShowUnReads={isShowUnReads} />
    </div>
  );
};

export default memo(ConversationListSidebar);
