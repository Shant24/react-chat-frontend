import React, { ChangeEvent, Dispatch, memo, RefObject, SetStateAction, useRef } from 'react';

import cls from 'classnames';
import Button from 'antd/lib/button';
import CameraOutlined from '@ant-design/icons/CameraOutlined';

import styles from '../SendMessageInput/styles.module.scss';
import { IImageFile } from '../../types/file';

interface IUploaderButtonProps {
  setImages: Dispatch<SetStateAction<IImageFile[]>>
}

const UploaderButton = ({ setImages }: IUploaderButtonProps) => {
  const UploadInputRef = useRef(null) as RefObject<HTMLInputElement> | null;

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

  return (
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
  );
};

export default memo(UploaderButton);
