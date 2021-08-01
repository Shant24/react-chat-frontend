import React, { memo } from 'react';

import styles from '../styles.module.scss';
import { IImageFile } from '../../../../types/file';
import PreviewSingleImage from './PreviewSingleImage';

interface IImagePreviewProps {
  images: IImageFile[];
  handleRemoveImage: (imageName: string) => () => void;
}

const ImagePreview = ({ images, handleRemoveImage }: IImagePreviewProps) => (
  <div className={styles.previewImagesContainer}>
    {images.map((image) => (
      <PreviewSingleImage key={image.name} image={image} handleRemove={handleRemoveImage(image.name)} />
    ))}
  </div>
);

export default memo(ImagePreview);
