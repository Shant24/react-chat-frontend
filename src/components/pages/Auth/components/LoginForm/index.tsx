import React, { FC } from 'react';

import { Form, Input } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import styles from '../../styles.module.scss';
import { Button, ShadowBlock } from '../../../..';

const inputValidationOptions = {
  username: [{ required: true, message: 'Username is required!' }],
  password: [
    { required: true, message: 'Password is required!' },
    { min: 8, message: 'Password must be at least 8 characters!' },
  ],
};

interface ILoginFormProps {}

const LoginForm: FC<ILoginFormProps> = () => {
  const handleChange = (values: { username?: string; password?: string }) => {};

  const handleSubmit = (values: { username: string; password: string }) => {
    console.log('Success:', values);
  };

  const handleErrorFields = (errors: ValidateErrorEntity) => {
    console.log('errors', errors);
  };

  return (
    <section className={styles.authSectionContainer}>
      <div className={styles.titleContainer}>
        <h1>Login</h1>
        <p>Please, Login to your account</p>
      </div>

      <ShadowBlock className={styles.block}>
        <Form
          name="signInForm"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          onFinishFailed={handleErrorFields}
          onValuesChange={handleChange}
          requiredMark
        >
          <Form.Item
            className={styles.fieldWrapper}
            name="username"
            rules={inputValidationOptions.username}
            hasFeedback
            validateStatus="validating"
          >
            <Input
              className={styles.inputContainer}
              placeholder="Username"
              size="large"
              prefix={<UserOutlined className={styles.inputIcon} />}
            />
          </Form.Item>

          <Form.Item
            className={styles.fieldWrapper}
            name="password"
            rules={inputValidationOptions.password}
            hasFeedback
          >
            <Input.Password
              className={styles.inputContainer}
              type="password"
              placeholder="Password"
              size="large"
              prefix={<LockOutlined className={styles.inputIcon} />}
            />
          </Form.Item>

          <Form.Item className={styles.fieldWrapper}>
            <Button type="primary" size="large" htmlType="submit">
              Login
            </Button>

            <Link to="/auth/register" className={styles.suggestLink}>
              Register
            </Link>
          </Form.Item>
        </Form>
      </ShadowBlock>
    </section>
  );
};

export default LoginForm;
