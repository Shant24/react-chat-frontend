import React, { memo } from 'react';

import { Outlet } from 'react-router';

import styles from './styles.module.scss';

const Auth = () => (
  <div className={styles.authContainer}>
    <Outlet />
  </div>
);

export default memo(Auth);
