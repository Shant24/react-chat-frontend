import React, { memo } from 'react';

import { Redirect, Route, Switch } from 'react-router';

import styles from './styles.module.scss';
import { LoginForm, RegisterForm, Success } from './components';

const Auth = () => (
  <div className={styles.authContainer}>
    <Switch>
      <Route path="/auth/login" component={LoginForm} />

      <Route path="/auth/register" exact component={RegisterForm} />

      <Route path="/auth/register/success" component={Success} />

      <Redirect to="/auth/login" />
    </Switch>
  </div>
);

export default memo(Auth);
