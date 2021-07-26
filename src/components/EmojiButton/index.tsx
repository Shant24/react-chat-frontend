import React, { memo, useRef, useState } from 'react';

import cls from 'classnames';
import Button from 'antd/lib/button';
import SmileOutlined from '@ant-design/icons/SmileOutlined';
import { Picker, BaseEmoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import styles from '../SendMessageInput/styles.module.scss';
import useDarkMode from '../../hooks/useDarkMode';
import useOnClickOutside from '../../hooks/useOnClickOutside';

interface IEmojiButtonProps {
  handleEmojiSelect: (emoji: string) => void;
}

const EmojiButton = ({ handleEmojiSelect }: IEmojiButtonProps) => {
  const [isShowEmojiPicker, setIsShowEmojiPicker] = useState<boolean>(false);
  const { isDarkMode } = useDarkMode();
  const EmojiBtnContainerRef = useRef<HTMLDivElement>(null);

  const toggleEmojiPicker = () => {
    setIsShowEmojiPicker(!isShowEmojiPicker);
  };

  const handleCloseEmojiPicker = () => {
    setIsShowEmojiPicker(false);
  };

  useOnClickOutside(EmojiBtnContainerRef, handleCloseEmojiPicker);

  return (
    <div className={cls(styles.actionsContainer, styles.leftSide)}>
      <div ref={EmojiBtnContainerRef} className={styles.emojiBtnContainer}>
        <Button
          type="link"
          shape="circle"
          className={cls(styles.btn, styles.emojiBtn)}
          icon={<SmileOutlined className={cls(styles.icon, styles.emojiIcon)} />}
          onClick={toggleEmojiPicker}
        />

        {isShowEmojiPicker && (
          <div className={styles.emojiPickerContainer}>
            <Picker
              autoFocus
              color="#3674ff"
              theme={isDarkMode ? 'dark' : 'light'}
              title="Pick your emoji…"
              emoji="point_up"
              sheetSize={64}
              emojiSize={22}
              enableFrequentEmojiSort
              onSelect={({ native }: BaseEmoji) => handleEmojiSelect(native)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(EmojiButton);
