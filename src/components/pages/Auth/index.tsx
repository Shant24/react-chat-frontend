import React, { FC, memo } from 'react';

import cn from 'classnames';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import styles from './ch.module.scss';
import { ShadowBlock, Button } from '../../';
import useWindowSize from '../../../hooks/useWindowSize';

interface AuthProps {}

const Auth: FC<AuthProps> = () => {
  const windowSize = useWindowSize();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.authContainer} style={{ maxHeight: windowSize.height, height: windowSize.height }}>
      <div className={styles.authContent}>
        <div className={styles.titleContainer}>
          <h1>Sign In</h1>
          <p>Please, sign-in in your account</p>
        </div>

        <ShadowBlock className={styles.block}>
          <Form
            name="signInForm"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Username is required!' }]}
              hasFeedback
              // validateStatus="success"
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Password is required!' }]}
              hasFeedback
              // validateStatus="success"
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" size="large" htmlType="submit">
                Sing In
              </Button>

              <a href="#2">Register</a>
            </Form.Item>
          </Form>
        </ShadowBlock>
      </div>
    </div>
  );
};

export default memo(Auth);
