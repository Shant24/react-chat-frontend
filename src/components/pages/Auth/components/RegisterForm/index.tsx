import React from 'react';

import cls from 'classnames';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useFormik } from 'formik';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import UserOutlined from '@ant-design/icons/UserOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';
import MailOutlined from '@ant-design/icons/MailOutlined';

import styles from '../../styles.module.scss';
import { IRegisterValues } from '../../../../../types/auth';
import { validateFieldStatusHelper } from '../../../../../helpers/validateFieldStatusHelper';
import { RegisterSchema as validationSchema } from '../../../../../validations';
import ShadowBlock from '../ShadowBlock';
import Button from '../../../../Button';

const RegisterForm = ({ history }: RouteComponentProps) => {
  const formik = useFormik({
    initialValues: { email: '', username: '', password: '', confirmPassword: '' },
    onSubmit: (values: IRegisterValues) => {
      // TODO: add logic
      console.log('values register', values);
      history.push('/auth/register/success');
    },
    validationSchema,
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
        <Form initialValues={{ remember: true }} onFinish={handleSubmit} requiredMark>
          <Form.Item
            className={styles.fieldWrapper}
            name="email"
            hasFeedback
            help={!touched.email ? null : errors.email}
            validateStatus={validateFieldStatusHelper(values, errors, touched, 'email')}
          >
            <Input
              id="email"
              name="email"
              type="email"
              className={cls(styles.inputContainer, { [styles.hasError]: errors.email })}
              placeholder="E-Mail"
              size="large"
              prefix={<MailOutlined className={styles.inputIcon} />}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item
            name="username"
            className={styles.fieldWrapper}
            hasFeedback
            help={!touched.username ? null : errors.username}
            validateStatus={validateFieldStatusHelper(values, errors, touched, 'username')}
          >
            <Input
              id="username"
              name="username"
              className={cls(styles.inputContainer, { [styles.hasError]: errors.username })}
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
            validateStatus={validateFieldStatusHelper(values, errors, touched, 'password')}
          >
            <Input.Password
              id="password"
              name="password"
              type="password"
              className={cls(styles.inputContainer, styles.passwordField, { [styles.hasError]: errors.password })}
              autoComplete="new-password"
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
            validateStatus={validateFieldStatusHelper(values, errors, touched, 'confirmPassword')}
          >
            <Input.Password
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className={cls(
                styles.inputContainer,
                styles.passwordField,
                { [styles.hasError]: errors.confirmPassword },
              )}
              placeholder="Confirm Password"
              size="large"
              prefix={<LockOutlined className={styles.inputIcon} />}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item className={cls(styles.fieldWrapper, styles.submitBtnContainer)}>
            <Button
              className={styles.submitBtn}
              type="primary"
              size="large"
              htmlType="submit"
              disabled={!(isValid && dirty)}
            >
              Register
            </Button>

            <div className={styles.suggestLinkContainer}>
              <Link to="/auth" className={styles.suggestLink}>
                Login to your account
              </Link>
            </div>
          </Form.Item>
        </Form>
      </ShadowBlock>
    </section>
  );
};

export default RegisterForm;
