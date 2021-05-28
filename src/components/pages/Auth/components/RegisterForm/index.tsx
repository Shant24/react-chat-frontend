import React, { FC } from 'react';

import { Form, Input } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, RouteComponentProps } from 'react-router-dom';

import styles from '../../styles.module.scss';
import { Button, ShadowBlock } from '../../../..';

const inputValidationOptions = {
  email: [
    { required: true, message: 'E-Mail is required!' },
    // { types: 'email', message: 'Enter a valid E-Mail address!' },
  ],
  username: [{ required: true, message: 'Username is required!' }],
  password: [
    { required: true, message: 'Password is required!' },
    { min: 8, message: 'Password must be at least 8 characters!' },
  ],
  confirmPassword: [
    { required: true, message: 'Confirm Password is required!' },
    { min: 8, message: 'Confirm Password must be at least 8 characters!' },
  ],
};

interface IRegisterFormProps extends RouteComponentProps {}

const RegisterForm: FC<IRegisterFormProps> = ({ history }) => {
  const handleChange = (values: {
    email?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
  }) => {};

  const handleSubmit = (values: { email: string; username: string; password: string; confirmPassword: string }) => {
    console.log('Success:', values);
    history.push('/auth/register/success');
  };

  const handleErrorFields = (errors: ValidateErrorEntity) => {
    console.log('errors', errors);
  };

  return (
    <section className={styles.authSectionContainer}>
      <div className={styles.titleContainer}>
        <h1>Register</h1>
        <p>To enter the chat, you need to register</p>
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
          <Form.Item className={styles.fieldWrapper} name="email" rules={inputValidationOptions.email} hasFeedback>
            <Input
              autoComplete="off"
              className={styles.inputContainer}
              placeholder="E-Mail"
              size="large"
              prefix={<MailOutlined className={styles.inputIcon} />}
            />
          </Form.Item>

          <Form.Item
            className={styles.fieldWrapper}
            name="username"
            rules={inputValidationOptions.username}
            hasFeedback
          >
            <Input
              autoComplete="off"
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
              autoComplete="off"
              className={styles.inputContainer}
              type="password"
              placeholder="Password"
              size="large"
              prefix={<LockOutlined className={styles.inputIcon} />}
            />
          </Form.Item>

          <Form.Item
            className={styles.fieldWrapper}
            name="confirmPassword"
            rules={inputValidationOptions.confirmPassword}
            hasFeedback
          >
            <Input.Password
              autoComplete="off"
              className={styles.inputContainer}
              type="password"
              placeholder="Confirm Password"
              size="large"
              prefix={<LockOutlined className={styles.inputIcon} />}
            />
          </Form.Item>

          <Form.Item className={styles.fieldWrapper}>
            <Button type="primary" size="large" htmlType="submit">
              Register
            </Button>

            <Link to="/auth/login" className={styles.suggestLink}>
              Login to your account
            </Link>
          </Form.Item>
        </Form>
      </ShadowBlock>
    </section>
  );
};

export default RegisterForm;
