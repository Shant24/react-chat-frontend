import React, { FC, memo, ReactElement } from 'react';

import cls from 'classnames';

import styles from './styles.module.scss';

interface ShadowBlockProps {
  children: ReactElement;
  className?: string;
}

const ShadowBlock: FC<ShadowBlockProps> = ({ children, className = '' }) => (
  <div className={cls(styles.container, { [className]: className })}>{children}</div>
);

export default memo(ShadowBlock);
