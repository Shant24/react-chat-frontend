import React, { memo, RefObject, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import { Empty, Spin } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './styles.module.scss';
import { IDialog } from '../../types/dialog';
import { DialogueItem } from '../';
import { isLoadingDialoguesSelector } from '../../store/selectors/dialoguesSelector';

interface IDialoguesProps {
  items: IDialog[];
  height?: number;
  isShowUnReads: boolean;
}

const Dialogues = ({ items, height = 0, isShowUnReads }: IDialoguesProps) => {
  const ScrollbarsRef = useRef() as RefObject<Scrollbars> | undefined;
  const isLoading = useSelector(isLoadingDialoguesSelector);

  useEffect(() => {
    if (ScrollbarsRef?.current && isLoading && !!items.length) {
      setTimeout(() => {
        ScrollbarsRef.current?.scrollToTop();
      }, 0);
    }
  }, [ScrollbarsRef, items, isLoading, isShowUnReads]);

  return (
    <Scrollbars ref={ScrollbarsRef} style={{ height: `${height}px` }} autoHide>
      {isLoading ? (
        <Spin className={styles.loadingContainer} tip="Loading dialogues" />
      ) : !!items.length ? (
        items.map((item) => <DialogueItem key={item._id} {...item} />)
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No dialogues" />
      )}
    </Scrollbars>
  );
};

export default memo(Dialogues);
