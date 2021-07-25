import React, { memo, RefObject, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import Empty from 'antd/lib/empty';
import Spin from 'antd/lib/spin';
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './styles.module.scss';
import { IDialog } from '../../types/dialog';
import { isLoadingDialoguesSelector } from '../../store/selectors/dialoguesSelector';
import { DialogueItem } from '../';

interface IDialoguesProps {
  items: IDialog[];
  isShowUnReads: boolean;
}

const Dialogues = ({ items, isShowUnReads }: IDialoguesProps) => {
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
    <Scrollbars ref={ScrollbarsRef} className={styles.dialoguesScrollableContainer} autoHide>
      {isLoading ? (
        <Spin className={styles.loadingContainer} tip="Loading dialogues" />
      ) : !!items.length ? (
        items.map((item) => <DialogueItem key={item._id} {...item} />)
      ) : (
        <Empty className={styles.emptyData} image={Empty.PRESENTED_IMAGE_SIMPLE} description="No dialogues" />
      )}
    </Scrollbars>
  );
};

export default memo(Dialogues);
