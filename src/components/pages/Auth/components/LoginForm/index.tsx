import React, { memo } from 'react';

import cls from 'classnames';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useFormik } from 'formik';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import UserOutlined from '@ant-design/icons/UserOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';

import styles from '../../styles.module.scss';
import { ILoginValues } from '../../../../../types/auth';
import { validateFieldStatusHelper } from '../../../../../helpers/validateFieldStatusHelper';
import { LoginSchema as validationSchema } from '../../../../../validations';
import { Button, ShadowBlock } from '../../../../';

const LoginForm = ({ history }: RouteComponentProps) => {
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    onSubmit: (values: ILoginValues) => {
      // TODO: add logic
      console.log('values login', values);
      history.push('/auth/register');
    },
    validationSchema,
    validateOnMount: true,
  });

  const { values, errors, isValid, dirty, touched, handleSubmit, handleChange, handleBlur } = formik;

  return (
    <section className={styles.authSectionContainer}>
      <div className={styles.titleContainer}>
        <h1>Login</h1>
        <p>Please, Login to your account</p>
      </div>

      <ShadowBlock className={styles.block}>
        <Form initialValues={values} onFinish={handleSubmit} requiredMark>
          <Form.Item
            className={styles.fieldWrapper}
            name="username"
            hasFeedback
            help={!touched.username ? null : errors.username}
            validateStatus={validateFieldStatusHelper(values, errors, touched, 'username')}
          >
            <Input
              id="username"
              type="text"
              placeholder="Username"
              size="large"
              className={cls(styles.inputContainer, { [styles.hasError]: errors.username })}
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              prefix={<UserOutlined className={styles.inputIcon} />}
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
              type="password"
              placeholder="Password"
              size="large"
              className={cls(styles.inputContainer, styles.passwordField, { [styles.hasError]: errors.password })}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              prefix={<LockOutlined className={styles.inputIcon} />}
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
              Login
            </Button>

            <div className={styles.suggestLinkContainer}>
              <Link to="/auth/register" className={styles.suggestLink}>
                Register
              </Link>
            </div>
          </Form.Item>
        </Form>
      </ShadowBlock>
    </section>
  );
};

export default memo(LoginForm);
