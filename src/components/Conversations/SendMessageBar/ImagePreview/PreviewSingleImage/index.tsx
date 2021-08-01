import React, { useEffect } from 'react';

import DeleteFilled from '@ant-design/icons/DeleteFilled';

import styles from '../styles.module.scss';
import { IImageFile } from '../../../../../types/file';

interface IImagePreviewProps {
  image: IImageFile;
  handleRemove: () => void;
}

const PreviewSingleImage = ({ image: { src, name }, handleRemove }: IImagePreviewProps) => {
  useEffect(() => () => {
    URL.revokeObjectURL(src);
  }, [src]);

  return (
    <div className={styles.imageContainer} onClick={handleRemove}>
      <img src={src} className={styles.image} alt={name} />

      <div className={styles.removeContainer}>
        <DeleteFilled />
      </div>
    </div>
  );
};

export default PreviewSingleImage;
