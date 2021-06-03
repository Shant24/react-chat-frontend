import React from 'react';

import cls from 'classnames';

import { generateAvatarFromName } from '../../helpers/colorGenerator';

interface IAvatarProps {
  name: string;
  avatar: string;
  className: string;
}

const Avatar = ({ name, avatar, className }: IAvatarProps) => {
  return (
    <div className={cls(className)} style={{ background: !avatar ? generateAvatarFromName(name) : undefined }}>
      {avatar && <img src={avatar} alt={`${name} avatar`} />}
    </div>
  );
};

export default Avatar;
