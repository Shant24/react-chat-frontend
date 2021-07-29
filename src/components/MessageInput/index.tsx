import React, { CSSProperties, memo, RefObject, useEffect, useRef, useState } from 'react';

import cls from 'classnames';
import Button from 'antd/lib/button';
import AudioOutlined from '@ant-design/icons/AudioOutlined';
import SendOutlined from '@ant-design/icons/SendOutlined';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { noop } from 'lodash';

import styles from './styles.module.scss';
import { IImageFile } from '../../types/file';
import useWindowSize from '../../hooks/useWindowSize';
import { parseEmojis } from '../../helpers/emojiHelper';
import { UploaderButton, EmojiButton, PreviewSingleImage, ContentEditableInput } from '../';

const MessageInput = () => {
  const InputContainerRef = useRef() as RefObject<Scrollbars>;
  const InputRef = useRef() as RefObject<HTMLDivElement>;
  const { width } = useWindowSize();
  const [isMount, setIsMount] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>('');
  const [images, setImages] = useState<IImageFile[]>([]);
  const [inputAreaWidth, setInputAreaWidth] = useState<number>(0);

  useEffect(() => {
    setIsMount(true);
  }, []);

  useEffect(() => {
    setInputAreaWidth(InputContainerRef?.current?.container.offsetWidth || 0);
  }, [width]);

  const handleAudioClick = noop;

  const handleMessageClick = () => {
    // TODO: send message, remove textarea value and focus on it
    console.log('textValue', textValue);
    setTextValue('');
    InputContainerRef?.current?.container.scrollTo({ top: 0 });
    // TODO: this is not working, adjust this
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
          <Scrollbars
            ref={InputContainerRef}
            style={{ '--input-area-width': `${inputAreaWidth}px` } as CSSProperties}
            className={styles.inputAreaScrollableContainer}
            autoHide={false}
            autoHeight
          >
            <ContentEditableInput
              ref={InputRef}
              className={cls(styles.inputArea, { [styles.notEmpty]: !textValue.length })}
              content={textValue}
              setContent={setTextValue}
              placeholder="Enter the message..."
              tabIndex={0}
            />
          </Scrollbars>
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
