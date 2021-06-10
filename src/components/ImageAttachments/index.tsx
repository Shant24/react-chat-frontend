import React, { memo } from 'react';

import cls from 'classnames';

import styles from './styles.module.scss';

interface IImageAttachmentsProps {
  attachments: { url: string; filename: string }[];
  isMe: boolean;
  isBigImage: boolean;
}

const ImageAttachments = ({ attachments, isMe, isBigImage }: IImageAttachmentsProps) => (
  <div className={cls(styles.attachmentsContainer, { [styles.isMe]: isMe, [styles.isBigImage]: isBigImage })}>
    {attachments.map(({ url, filename }) => (
      <div
        key={`${url}-${filename}`}
        className={cls(styles.attachmentWrapper, { [styles.big]: attachments.length === 1 })}
      >
        <img src={url} alt={filename} title={filename} />
      </div>
    ))}
  </div>
);

export default memo(ImageAttachments);
