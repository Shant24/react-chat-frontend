import React, { ChangeEvent, KeyboardEvent, memo, MouseEvent, RefObject, useEffect, useRef, useState } from 'react';

import cls from 'classnames';
import Button from 'antd/lib/button';
import AudioOutlined from '@ant-design/icons/AudioOutlined';
import SendOutlined from '@ant-design/icons/SendOutlined';
import { BaseEmoji } from 'emoji-mart';
import Textarea from 'rc-textarea';
import { isMobile } from 'react-device-detect';
import { noop } from 'lodash';

import styles from './styles.module.scss';
import { IImageFile } from '../../../types/file';
import { parseEmojis } from '../../../helpers/emojiHelper';
import ImagePreview from './ImagePreview';
import EmojiButton from './EmojiButton';
import ImageUploaderButton from './ImageUploaderButton';

const SendMessageBar = () => {
  const TextareaRef = useRef<Textarea>(null);
  const InputRef = useRef() as RefObject<HTMLDivElement>;
  const [isMount, setIsMount] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>('');
  const [images, setImages] = useState<IImageFile[]>([]);

  useEffect(() => {
    setIsMount(true);
  }, []);

  const scrollToBottom = () => {
    if (TextareaRef?.current) {
      const { resizableTextArea: { textArea } } = TextareaRef.current;
      textArea.scrollTo({ top: textArea.scrollHeight });
    }
  };

  const handleEmojiSelect = ({ native }: BaseEmoji) => {
    setTextValue(`${textValue}${parseEmojis(native)}`);
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
    scrollToBottom();
  };

  const handleRecordAudio = noop;

  const sendMessage = () => {
    // TODO: send message, remove textarea value and focus on it
    setTextValue('');
    InputRef.current?.focus();
    scrollToBottom();
  };

  const handleSendMessage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sendMessage();
  };

  const handlePressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!isMobile && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleRemoveImage = (imageName: string) => () => {
    setImages(images.filter(({ name }) => name !== imageName));
  };

  return (
    <div className={styles.messageInputContainer}>
      {!!images.length && (
        <ImagePreview images={images} handleRemoveImage={handleRemoveImage} />
      )}

      <div className={styles.sendMessageInputContainer}>
        <EmojiButton handleEmojiSelect={handleEmojiSelect} />

        {isMount && (
          <Textarea
            ref={TextareaRef}
            className={styles.textarea}
            value={parseEmojis(textValue)}
            placeholder="Enter the message..."
            autoSize={{ minRows: 1, maxRows: 6 }}
            onChange={handleTextChange}
            onPressEnter={handlePressEnter}
            spellCheck
          />
        )}

        <div className={cls(styles.actionsContainer, styles.rightSide)}>
          <ImageUploaderButton setImages={setImages} />

          <div className={styles.conditionContainer}>
            <Button
              type="link"
              shape="circle"
              className={cls(styles.btn, styles.sendBtn, styles.conditionalIcons, { [styles.show]: textValue })}
              icon={<SendOutlined className={cls(styles.icon, styles.sendIcon)} />}
              onClick={handleSendMessage}
            />

            <Button
              type="link"
              shape="circle"
              className={cls(styles.btn, styles.audioBtn, styles.conditionalIcons, { [styles.show]: !textValue })}
              icon={<AudioOutlined className={cls(styles.icon, styles.audioIcon)} />}
              onClick={handleRecordAudio}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SendMessageBar);
