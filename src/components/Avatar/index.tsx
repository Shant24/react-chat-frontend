import React, { memo } from 'react';

import cls from 'classnames';

import styles from './styles.module.scss';
import { generateAvatarGradientFromFullName } from '../../helpers/colorHelper';
import { generateNameForAvatar } from '../../helpers/stringHelper';

interface IAvatarProps {
  fullName: string;
  avatar: string;
  className: string;
}

const Avatar = ({ fullName, avatar, className }: IAvatarProps) => (
  <div
    className={cls(className, { [styles.textAvatar]: !avatar, textAvatar: !avatar })}
    {...(!avatar ? { style: { background: generateAvatarGradientFromFullName(fullName) } } : {})}
  >
    {avatar ? <img src={avatar} alt={`${fullName} avatar`} /> : <span>{generateNameForAvatar(fullName)}</span>}
  </div>
);

export default memo(Avatar);
