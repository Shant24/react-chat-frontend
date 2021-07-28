import React, { memo, RefObject, useEffect, useRef, useState } from 'react';

import cls from 'classnames';
import Button from 'antd/lib/button';
import AudioOutlined from '@ant-design/icons/AudioOutlined';
import SendOutlined from '@ant-design/icons/SendOutlined';
// @ts-ignore
import { Scrollbars } from '@manychat/react-custom-scrollbars';
import { noop } from 'lodash';

import styles from './styles.module.scss';
import { IImageFile } from '../../types/file';
import { parseEmojis } from '../../helpers/emojiHelper';
import { UploaderButton, EmojiButton, PreviewSingleImage, ContentEditableInput } from '../';

const MessageInput = () => {
  const InputRef = useRef() as RefObject<HTMLElement>;
  const [isMount, setIsMount] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>('');
  const [images, setImages] = useState<IImageFile[]>([]);

  useEffect(() => {
    setIsMount(true);
  }, []);

  const handleAudioClick = noop;

  const handleMessageClick = () => {
    // TODO: send message, remove textarea value and focus on it
    InputRef?.current?.focus();
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
          <div className={styles.inputAreaContainer}>
            <Scrollbars className={styles.inputAreaScrollableContainer} autoHide={false}>
              <ContentEditableInput
                ref={InputRef}
                className={styles.inputArea}
                content={textValue}
                setContent={setTextValue}
                placeholder="Enter the message..."
              />
            </Scrollbars>
          </div>
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

export default memo(MessageInput);
