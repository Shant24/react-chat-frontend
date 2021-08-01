import React, { FC, memo } from 'react';

import cls from 'classnames';
import { Button as BaseButton, ButtonProps } from 'antd';

import styles from './styles.module.scss';

interface IButtonProps extends ButtonProps {
  className?: string;
}

const Button: FC<IButtonProps> = ({ children, className = '', size, ...restProps }) => (
  <BaseButton
    {...restProps}
    className={cls(styles.button, { [styles.large]: size === 'large', [className]: className })}
  >
    {children}
  </BaseButton>
);

export default memo(Button);
