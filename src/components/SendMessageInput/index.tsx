import React, { ChangeEvent, KeyboardEvent, memo, RefObject, useEffect, useRef, useState } from 'react';

import cls from 'classnames';
import { Button } from 'antd';
import { AudioOutlined, CameraOutlined, SendOutlined, SmileOutlined } from '@ant-design/icons';
import Textarea from 'rc-textarea';
import { isMobile } from 'react-device-detect';
import Upload from 'rc-upload';
import { RcFile, UploadProps } from 'rc-upload/lib/interface';
import { noop } from 'lodash';

import styles from './styles.module.scss';

// const dummyRequest = ({ file, onSuccess }) => {
//   setTimeout(() => {
//     onSuccess('ok');
//   }, 0);
// };

interface ISendMessageInputProps {}

const SendMessageInput = (props: ISendMessageInputProps) => {
  const [isMount, setIsMount] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>('');
  const [files, setFiles] = useState<RcFile[]>([]);

  const TextareaRef = useRef(null) as RefObject<Textarea> | null;

  useEffect(() => {
    setIsMount(true);
  }, []);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
    e.target.scrollTo(0, e.target.scrollHeight);
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

  /**
   * @param file uploader actions start
   */
  const getFiles = (file: RcFile, fileList: RcFile[]) => {
    // console.log('file', file);
    // console.log('fileList', fileList);

    setFiles(fileList);
    return false;
  };

  const handleUploadStart = (file: any) => {
    console.log('onStart', file, file.name);
  };

  const handleUploadSuccess = (ret: any) => {
    console.log('onSuccess', ret);
  };

  const handleUploadError = (err: any) => {
    console.log('onError', err);
  };

  const handleUploadAction = (props: UploadProps): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('/upload.do');
      }, 2000);
    });
  };
  /**
   * @param file uploader actions end
   */

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
        <Upload
          multiple
          accept="image/*"
          maxLength={8}
          // openFileDialogOnClick
          // customRequest={(e) => console.log('e request', e)}
          onChange={(e) => console.log('e change', e)}
          onStart={handleUploadStart}
          beforeUpload={getFiles}
          // onSuccess={handleUploadSuccess}
          // onError={handleUploadError}
          // action={dummyRequest}
        >
          <Button
            type="link"
            shape="circle"
            className={cls(styles.btn, styles.photoBtn)}
            icon={<CameraOutlined className={cls(styles.icon, styles.photoIcon)} />}
          />
        </Upload>

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
