import React from 'react';

import { Link } from 'react-router-dom';
import { InfoCircleTwoTone } from '@ant-design/icons';

import styles from '../../styles.module.scss';
import { ShadowBlock } from '../../../..';

const RegisterSuccess = () => {
  return (
    <section className={styles.authSectionContainer}>
      <div className={styles.titleContainer}>
        <h1>Register</h1>
        <p>To enter the chat, you need to register</p>
      </div>

      <ShadowBlock className={styles.block}>
        <div className={styles.successContainer}>
          <InfoCircleTwoTone className={styles.infoIcon} />

          <h2>Verify your account</h2>

          <p>An email has been sent to your email with a link to confirm your account.</p>

          <Link to="/auth/login">Go to Login page</Link>
        </div>
      </ShadowBlock>
    </section>
  );
};

export default RegisterSuccess;
