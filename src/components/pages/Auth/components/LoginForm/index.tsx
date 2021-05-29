import React, { FC, memo } from 'react';

import cls from 'classnames';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useFormik } from 'formik';

import styles from '../../styles.module.scss';
import '../../styles.scss';
import { Button, ShadowBlock } from '../../../../';
import { LoginSchema as validationSchema } from '../../../../../validation';

interface IValues {
  username: string;
  password: string;
}

interface ILoginFormProps extends RouteComponentProps {}

const LoginForm: FC<ILoginFormProps> = ({ history }) => {
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema,
    onSubmit: (values: IValues) => {
      console.log('values a', values);
      history.push('/auth/register');
    },
  });

  const { values, errors, isValid, dirty, touched, handleSubmit, handleChange, handleBlur } = formik;

  return (
    <section className={styles.authSectionContainer}>
      <div className={styles.titleContainer}>
        <h1>Login</h1>
        <p>Please, Login to your account</p>
      </div>

      <ShadowBlock className={styles.block}>
        <Form className="authForm" initialValues={values} onFinish={handleSubmit} requiredMark>
          <Form.Item
            className={styles.fieldWrapper}
            name="username"
            hasFeedback
            help={!touched.username ? null : errors.username}
            validateStatus={!touched.username ? '' : errors.username ? 'error' : 'success'}
          >
            <Input
              id="username"
              type="text"
              placeholder="Username"
              size="large"
              className={styles.inputContainer}
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
            validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
          >
            <Input.Password
              id="password"
              type="password"
              placeholder="Password"
              size="large"
              className={cls(styles.inputContainer, styles.passwordField)}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              prefix={<LockOutlined className={styles.inputIcon} />}
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

export default memo(LoginForm);
