import React, { FC, memo, ReactElement } from 'react';

import cn from 'classnames';

import styles from './ch.module.scss';

interface ShadowBlockProps {
  children: ReactElement;
  className?: string;
}

const ShadowBlock: FC<ShadowBlockProps> = ({ children, className = '' }) => (
  <div className={cn(styles.container, { [className]: className })}>{children}</div>
);

export default memo(ShadowBlock);
