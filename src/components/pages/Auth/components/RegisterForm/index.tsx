import React, { FC } from 'react';

import cls from 'classnames';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useFormik } from 'formik';

import styles from '../../styles.module.scss';
import '../../styles.scss';
import { Button, ShadowBlock } from '../../../../';
import { RegisterSchema as validationSchema } from '../../../../../validation';

interface IValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface IRegisterFormProps extends RouteComponentProps {}

const RegisterForm: FC<IRegisterFormProps> = ({ history }) => {
  const formik = useFormik({
    initialValues: { email: '', username: '', password: '', confirmPassword: '' },
    onSubmit: (values: IValues) => {
      console.log('values a', values);
      history.push('/auth/register/success');
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
  });

  const { values, errors, isValid, dirty, touched, handleSubmit, handleChange, handleBlur } = formik;

  return (
    <section className={styles.authSectionContainer}>
      <div className={styles.titleContainer}>
        <h1>Register</h1>
        <p>To enter the chat, you need to register</p>
      </div>

      <ShadowBlock className={styles.block}>
        <Form className="authForm" initialValues={{ remember: true }} onFinish={handleSubmit} requiredMark>
          <Form.Item
            className={styles.fieldWrapper}
            name="email"
            hasFeedback
            help={!touched.email ? null : errors.email}
            validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
          >
            <Input
              className={styles.inputContainer}
              type="email"
              placeholder="E-Mail"
              size="large"
              prefix={<MailOutlined className={styles.inputIcon} />}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item
            className={styles.fieldWrapper}
            name="username"
            hasFeedback
            help={!touched.username ? null : errors.username}
            validateStatus={!touched.username ? '' : errors.username ? 'error' : 'success'}
          >
            <Input
              className={styles.inputContainer}
              placeholder="Username"
              size="large"
              prefix={<UserOutlined className={styles.inputIcon} />}
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item
            className={styles.fieldWrapper}
            name="password"
            hasFeedback
            help={!touched.password ? null : errors.password}
            validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
          >
            <Input.Password
              autoComplete="new-password"
              className={cls(styles.inputContainer, styles.passwordField)}
              type="password"
              placeholder="Password"
              size="large"
              prefix={<LockOutlined className={styles.inputIcon} />}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item
            className={styles.fieldWrapper}
            name="confirmPassword"
            hasFeedback
            help={!touched.confirmPassword ? null : errors.confirmPassword}
            validateStatus={!touched.confirmPassword ? '' : errors.confirmPassword ? 'error' : 'success'}
          >
            <Input.Password
              className={cls(styles.inputContainer, styles.passwordField)}
              type="password"
              placeholder="Confirm Password"
              size="large"
              prefix={<LockOutlined className={styles.inputIcon} />}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item className={styles.fieldWrapper}>
            <Button
              className={styles.submitBtn}
              type="primary"
              size="large"
              htmlType="submit"
              disabled={!(isValid && dirty)}
            >
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
