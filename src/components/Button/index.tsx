import React, { FC, memo, ReactElement } from 'react';

import { Button as BaseButton } from 'antd';
import cn from 'classnames';

import styles from './ch.module.scss';

interface ButtonProps {
  children: ReactElement | string;
  [props: string]: any;
}

const Button: FC<ButtonProps> = ({ children, className, size, ...restProps }) => (
  <BaseButton
    {...restProps}
    className={cn(styles.button, { [className]: className, [styles.large]: size === 'large' })}
  >
    {children}
  </BaseButton>
);

export default memo(Button);
