import React, { FC, memo } from 'react';

import cls from 'classnames';
import { Button as BaseButton } from 'antd';

import styles from './styles.module.scss';

interface IButtonProps {
  [props: string]: any;
}

const Button: FC<IButtonProps> = ({ children, className, size, ...restProps }) => (
  <BaseButton
    {...restProps}
    className={cls(styles.button, { [styles.large]: size === 'large', [className]: className })}
  >
    {children}
  </BaseButton>
);

export default memo(Button);
