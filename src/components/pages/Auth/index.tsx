import React, { FC, memo } from 'react';

import { Redirect, Route, Switch } from 'react-router';

import styles from './styles.module.scss';
import useWindowSize from '../../../hooks/useWindowSize';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

interface AuthProps {}

const Auth: FC<AuthProps> = () => {
  const windowSize = useWindowSize();

  return (
    <div className={styles.authContainer} style={{ maxHeight: windowSize.height, height: windowSize.height }}>
      <Switch>
        <Route path="/auth/login" component={LoginForm} />

        <Route path="/auth/register" exact component={RegisterForm} />

        <Route path="/auth/register/success" component={RegisterForm} />

        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};

export default memo(Auth);
