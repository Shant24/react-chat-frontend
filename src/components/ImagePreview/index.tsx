import React, { useEffect } from 'react';

import styles from './styles.module.scss';
import { IImageFile } from '../../types/file';

interface IImagePreviewProps {
  image: IImageFile;
  handleRemove: () => void;
}

const ImagePreview = ({ image: { src, name }, handleRemove }: IImagePreviewProps) => {
  useEffect(() => () => {
    // remove image url before unmounting
    URL.revokeObjectURL(src);
  }, [src]);

  return (
    <div className={styles.sendingImageContainer} onDoubleClick={handleRemove}>
      <img src={src} className={styles.previewImage} alt={name} />
    </div>
  );
};

export default ImagePreview;
