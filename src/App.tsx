import React from 'react';

import { Route, Routes, Navigate } from 'react-router';

import PageLayout from './components/PageLayout';
import Home from './components/pages/Home';
import Auth from './components/pages/Auth';
import LoginForm from './components/pages/Auth/components/LoginForm';
import RegisterForm from './components/pages/Auth/components/RegisterForm';
import RegisterSuccess from './components/pages/Auth/components/RegisterSuccess';

const App = () => (
  <PageLayout>
    <Routes>
      {/* TODO: add home landing page */}
      <Route path="/" element={<Home />} />

      <Route>
        <Route path="/m" element={<Home />} />

        <Route path="/m/:id" element={<Home />} />
      </Route>

      <Route path="/auth/*" element={<Auth />}>
        <Route path="*" element={<Navigate to="" replace={true} />} />

        <Route path="" element={<LoginForm />} />

        <Route path="login" element={<LoginForm />} />

        <Route path="register" element={<RegisterForm />} />

        <Route path="register/success" element={<RegisterSuccess />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  </PageLayout>
);

export default App;
