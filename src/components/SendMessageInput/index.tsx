import React, { ChangeEvent, KeyboardEvent, memo, RefObject, useEffect, useRef, useState } from 'react';

import cls from 'classnames';
import Button from 'antd/lib/button';
import AudioOutlined from '@ant-design/icons/AudioOutlined';
import SendOutlined from '@ant-design/icons/SendOutlined';
import Textarea from 'rc-textarea';
import { isMobile } from 'react-device-detect';
import { noop } from 'lodash';

import styles from './styles.module.scss';
import { IImageFile } from '../../types/file';
import { parseEmojis } from '../../helpers/emojiHelper';
import { UploaderButton, EmojiButton, PreviewSingleImage } from '../';

const SendMessageInput = () => {
  const [isMount, setIsMount] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>('');
  const [images, setImages] = useState<IImageFile[]>([]);

  const TextareaRef = useRef(null) as RefObject<Textarea> | null;

  const scrollToBottom = () => {
    if (TextareaRef?.current) {
      const { resizableTextArea: { textArea } } = TextareaRef.current;
      textArea.scrollTo({ top: textArea.scrollHeight });
    }
  };

  useEffect(() => {
    setIsMount(true);
  }, []);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
    scrollToBottom();
  };

  const handlePressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!isMobile && !e.shiftKey) {
      e.preventDefault();
      // TODO: add functionality for send message when press enter
    }
  };

  const handleAudioClick = noop;

  const handleMessageClick = () => {
    // TODO: send message, remove textarea value and focus on it
    TextareaRef?.current?.focus();
  };

  const handleRemoveImage = (imageName: string) => () => {
    setImages(images.filter(({ name }) => name !== imageName));
  };

  const handleEmojiSelect = (emoji: string) => {
    setTextValue(`${textValue}${parseEmojis(emoji)}`);
  };

  return (
    <div className={styles.sendMessageContainer}>
      {/* TODO: create component from this */}
      {!!images.length && (
        <div className={styles.previewImagesContainer}>
          {images.map((image) => (
            <PreviewSingleImage key={image.name} image={image} handleRemove={handleRemoveImage(image.name)} />
          ))}
        </div>
      )}

      <div className={styles.sendMessageInputContainer}>
        <EmojiButton handleEmojiSelect={handleEmojiSelect} />

        {isMount && (
          <Textarea
            ref={TextareaRef}
            className={styles.textarea}
            value={parseEmojis(textValue)}
            placeholder="Enter the message..."
            autoSize={{ minRows: 1, maxRows: 3 }}
            onChange={handleTextChange}
            onPressEnter={handlePressEnter}
            spellCheck
          />
        )}

        <div className={cls(styles.actionsContainer, styles.rightSide)}>
          <UploaderButton setImages={setImages} />

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
    </div>
  );
};

export default memo(SendMessageInput);
