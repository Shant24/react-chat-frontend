import React, { FC, memo, ReactElement } from 'react';

import cls from 'classnames';
import { Button as BaseButton } from 'antd';

import styles from './styles.module.scss';

interface ButtonProps {
  children: ReactElement | string;
  [props: string]: any;
}

const Button: FC<ButtonProps> = ({ children, className, size, ...restProps }) => (
  <BaseButton
    {...restProps}
    className={cls(styles.button, { [className]: className, [styles.large]: size === 'large' })}
  >
    {children}
  </BaseButton>
);

export default memo(Button);
