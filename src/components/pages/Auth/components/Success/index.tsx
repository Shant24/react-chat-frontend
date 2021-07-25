import React from 'react';

import cls from 'classnames';
import { Link } from 'react-router-dom';
import InfoCircleTwoTone from '@ant-design/icons/InfoCircleTwoTone';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';

import styles from '../../styles.module.scss';
import useDarkMode from '../../../../../hooks/useDarkMode';
import { ShadowBlock } from '../../../..';

const RegisterSuccess = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section className={styles.authSectionContainer}>
      <div className={styles.titleContainer}>
        <h1>Register</h1>
        <p>To enter the chat, you need to register</p>
      </div>

      <ShadowBlock className={styles.block}>
        <div className={styles.successContainer}>
          {isDarkMode ? (
            <InfoCircleOutlined className={cls(styles.infoIcon, { [styles.isDark]: isDarkMode })} />
          ) : (
            <InfoCircleTwoTone className={styles.infoIcon} />
          )}

          <h2>Verify your account</h2>

          <p>An email has been sent to your email with a link to confirm your account.</p>

          <Link to="/auth/login">Go to Login page</Link>
        </div>
      </ShadowBlock>
    </section>
  );
};

export default RegisterSuccess;
