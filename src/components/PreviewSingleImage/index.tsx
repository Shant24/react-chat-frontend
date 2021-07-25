import React, { useEffect } from 'react';

import styles from './styles.module.scss';
import { IImageFile } from '../../types/file';
import DeleteFilled from '@ant-design/icons/DeleteFilled';

interface IImagePreviewProps {
  image: IImageFile;
  handleRemove: () => void;
}

const PreviewSingleImage = ({ image: { src, name }, handleRemove }: IImagePreviewProps) => {
  useEffect(() => () => {
    URL.revokeObjectURL(src);
  }, [src]);

  return (
    <div className={styles.previewSingleImageContainer} onClick={handleRemove}>
      <img src={src} className={styles.previewImage} alt={name} />

      <button className={styles.removeContainer}>
        <DeleteFilled />
      </button>
    </div>
  );
};

export default PreviewSingleImage;
