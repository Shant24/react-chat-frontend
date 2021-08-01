import React, { memo } from 'react';

import { Redirect, Route, Switch } from 'react-router';

import styles from './styles.module.scss';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import RegisterSuccess from './components/RegisterSuccess';

const Auth = () => (
  <div className={styles.authContainer}>
    <Switch>
      <Route path="/auth" exact component={LoginForm} />

      <Route path="/auth/register" exact component={RegisterForm} />

      <Route path="/auth/register/success" exact component={RegisterSuccess} />

      <Redirect to="/" />
    </Switch>
  </div>
);

export default memo(Auth);
