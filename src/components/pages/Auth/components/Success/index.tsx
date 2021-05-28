import React, { FC } from 'react';

import { InfoCircleTwoTone } from '@ant-design/icons';

import styles from '../../styles.module.scss';
import { ShadowBlock } from '../../../..';

interface IRegisterSuccessProps {}

const RegisterSuccess: FC<IRegisterSuccessProps> = (props) => {
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
        </div>
      </ShadowBlock>
    </section>
  );
};

export default RegisterSuccess;
