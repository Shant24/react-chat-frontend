import React, { ChangeEvent, KeyboardEvent, memo, RefObject, useEffect, useRef, useState } from 'react';

import cls from 'classnames';
import { Button } from 'antd';
import { AudioOutlined, CameraOutlined, SendOutlined, SmileOutlined } from '@ant-design/icons';
import Textarea from 'rc-textarea';
import { isMobile } from 'react-device-detect';
import { noop } from 'lodash';

import styles from './styles.module.scss';
import { IImageFile } from '../../types/file';
import PreviewSingleImage from '../PreviewSingleImage';

const SendMessageInput = () => {
  const [isMount, setIsMount] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>('');
  const [images, setImages] = useState<IImageFile[]>([]);

  const TextareaRef = useRef(null) as RefObject<Textarea> | null;
  const UploadInputRef = useRef(null) as RefObject<HTMLInputElement> | null;

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

  const handleEmojiClick = noop;
  const handleAudioClick = noop;

  const handleMessageClick = () => {
    // TODO: send message, remove textarea value and focus on it
    TextareaRef?.current?.focus();
  };

  const handleCameraClick = () => {
    UploadInputRef?.current?.click();
  };

  const handleSetFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const filesList = e.target.files;
    if (filesList) {
      const filesArr: IImageFile[] = [];
      for (let i = 0; i < filesList.length; i++) {
        const file: IImageFile = {
          file: filesList[i],
          name: filesList[i].name,
          src: URL.createObjectURL(filesList[i]),
        };
        filesArr.push(file);
      }
      setImages(filesArr);

      if (UploadInputRef?.current) {
        UploadInputRef.current.value = '';
      }
    }
  };

  const handleRemoveImage = (imageName: string) => () => {
    setImages(images.filter(({ name }) => name !== imageName));
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
        <div className={cls(styles.actionsContainer, styles.leftSide)}>
          <Button
            type="link"
            shape="circle"
            className={cls(styles.btn, styles.emojiBtn)}
            icon={<SmileOutlined className={cls(styles.icon, styles.emojiIcon)} />}
            onClick={handleEmojiClick}
          />
        </div>

        {isMount && (
          <Textarea
            ref={TextareaRef}
            className={styles.textarea}
            value={textValue}
            placeholder="Enter the message..."
            autoSize={{ minRows: 1, maxRows: 3 }}
            onChange={handleTextChange}
            onPressEnter={handlePressEnter}
            spellCheck
          />
        )}

        <div className={cls(styles.actionsContainer, styles.rightSide)}>
          <div className={styles.uploaderContainer}>
            <Button
              type="link"
              shape="circle"
              className={cls(styles.btn, styles.photoBtn)}
              icon={<CameraOutlined className={cls(styles.icon, styles.photoIcon)} />}
              onClick={handleCameraClick}
            />

            <input
              ref={UploadInputRef}
              type="file"
              accept="image/*"
              className={styles.uploadInput}
              onChange={handleSetFiles}
              multiple
            />
          </div>

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
