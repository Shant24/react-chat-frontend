import React, { memo, useState } from 'react';

import cls from 'classnames';
import { Button, Input } from 'antd';
import { AudioOutlined, CameraOutlined, SendOutlined, SmileOutlined } from '@ant-design/icons';
import { noop } from 'lodash';

import styles from './styles.module.scss';

interface ISendMessageInputProps {}

const SendMessageInput = (props: ISendMessageInputProps) => {
  const [textValue, setTextValue] = useState<string>('');

  const handleEmojiClick = noop;
  const handleCameraClick = noop;
  const handleMessageClick = noop;
  const handleAudioClick = noop;

  return (
    <div className={styles.sendMessageInputContainer}>
      <div className={cls(styles.actionsContainer, styles.leftSide)}>
        <Button
          type="link"
          shape="circle"
          className={cls(styles.btn, styles.emojiBtn)}
          icon={<SmileOutlined className={cls(styles.icon, styles.emojiIcon)} />}
          onClick={handleEmojiClick}
        />
      </div>

      <Input.TextArea
        size="large"
        className={styles.textarea}
        value={textValue}
        placeholder="Enter the message..."
        autoSize={{ minRows: 1, maxRows: 3 }}
        onChange={(e) => setTextValue(e.target.value)}
      />

      <div className={cls(styles.actionsContainer, styles.rightSide)}>
        <Button
          type="link"
          shape="circle"
          className={cls(styles.btn, styles.photoBtn)}
          icon={<CameraOutlined className={cls(styles.icon, styles.photoIcon)} />}
          onClick={handleCameraClick}
        />

        <div className={styles.conditionContainer}>
          <Button
            type="link"
            shape="circle"
            className={cls(styles.btn, styles.sendBtn, styles.conditionalIcons, { [styles.show]: textValue })}
            icon={<SendOutlined className={cls(styles.icon, styles.sendIcon)} />}
            onClick={handleMessageClick}
          />

          <Button
            type="link"
            shape="circle"
            className={cls(styles.btn, styles.audioBtn, styles.conditionalIcons, { [styles.show]: !textValue })}
            icon={<AudioOutlined className={cls(styles.icon, styles.audioIcon)} />}
            onClick={handleAudioClick}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(SendMessageInput);
