import React, { memo, RefObject, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import { Empty, Spin } from 'antd';
// import SimpleBarReact from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';

import styles from './styles.module.scss';
import { IDialog } from '../../types/dialog';
import { DialogueItem } from '../';
import { isLoadingDialoguesSelector } from '../../store/selectors/dialoguesSelector';
import CustomScrollbar from '../CustomScrollbar';

interface IDialoguesProps {
  items: IDialog[];
  isShowUnReads: boolean;
}

const Dialogues = ({ items, isShowUnReads }: IDialoguesProps) => {
  const ScrollbarsRef = useRef(null) as RefObject<HTMLDivElement> | null;
  const isLoading = useSelector(isLoadingDialoguesSelector);

  useEffect(() => {
    if (ScrollbarsRef) {
      ScrollbarsRef.current?.scrollTo({ top: ScrollbarsRef.current.scrollHeight });
    }
  }, [ScrollbarsRef, items, isShowUnReads]);

  return (
    <CustomScrollbar ref={ScrollbarsRef} className={styles.dialoguesList} autoHide>
      {isLoading ? (
        <Spin className={styles.loadingContainer} tip="Loading dialogues" />
      ) : !!items.length ? (
        items.map((item) => <DialogueItem key={item._id} {...item} />)
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No dialogues" />
      )}
    </CustomScrollbar>
  );
};

export default memo(Dialogues);
