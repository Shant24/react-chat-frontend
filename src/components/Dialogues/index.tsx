import React, { memo, RefObject, useEffect, useRef } from 'react';

import Scrollbars from 'react-custom-scrollbars';
import { Empty } from 'antd';

import styles from './styles.module.scss';
import { IDialog } from '../../types/dialog';
import { DialogueItem } from '../';

interface IDialoguesProps {
  items: IDialog[];
  isShowUnReads: boolean;
}

const Dialogues = ({ items, isShowUnReads }: IDialoguesProps) => {
  const ScrollbarsRef = useRef(null) as RefObject<Scrollbars> | null;

  useEffect(() => {
    if (ScrollbarsRef) {
      ScrollbarsRef.current?.scrollToTop();
    }
  }, [ScrollbarsRef, items, isShowUnReads]);

  return (
    <Scrollbars ref={ScrollbarsRef} className={styles.dialoguesList} autoHide>
      {!!items.length ? (
        items.map((item) => <DialogueItem key={item._id} {...item} />)
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No Dialogues" />
      )}
    </Scrollbars>
  );
};

export default memo(Dialogues);
