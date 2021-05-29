import * as yup from 'yup';
import { REGEXP } from '../utils/constants';

export const FieldValidationOptions = {
  email: [
    { required: true, message: 'E-Mail is required!' },
    { pattern: REGEXP.email, message: 'Enter a valid E-Mail address!' },
  ],
  username: [
    { required: true, message: 'Username is required!' },
    { min: 2, message: 'Username must be at least 2 characters!' },
    { max: 30, message: 'Username must be less than 30 characters!' },
    { pattern: REGEXP.username, message: 'Username can contain only letters and numbers, only numbers cannot be!' },
  ],
  password: [
    { required: true, message: 'Password is required!' },
    { min: 8, message: 'Password must be at least 8 characters!' },
    { max: 30, message: 'Password must be less than 30 characters!' },
    {
      pattern: REGEXP.password,
      message: 'Password must contain lowercase and uppercase letters, numbers and special characters (@ $!% *? &)!',
    },
  ],
  confirmPassword: [
    { required: true, message: 'Confirm Password is required!' },
    ({ getFieldValue }: { getFieldValue: (password: string) => string }) => ({
      validator(_: any, value: string) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('The two passwords that you entered do not match!'));
      },
    }),
  ],
};

export const LoginSchema = yup.object({
  username: yup
    .string()
    .trim()
    .min(2, 'Username must be at least 2 characters!')
    .max(20, 'Username must be less than 30 characters!')
    .matches(REGEXP.username, 'Username can contain only letters and numbers, only numbers cannot be!')
    .required('Username is required!'),

  password: yup
    .string()
    .trim()
    .min(8, 'Password must be at least 8 characters!')
    .max(30, 'Password must be less than 30 characters!')
    .matches(
      REGEXP.password,
      'Password must contain lowercase and uppercase letters, numbers and special characters (@ $!% *? &)!',
    )
    .required('Password is required!'),
});

export const RegisterSchema = yup.object({
  username: yup
    .string()
    .trim()
    .min(2, 'Username must be at least 2 characters!')
    .max(20, 'Username must be less than 30 characters!')
    .matches(REGEXP.username, 'Username can contain only letters and numbers, only numbers cannot be!')
    .required('Username is required!'),

  email: yup.string().email('Enter a valid E-Mail address!').trim().required('E-Mail is required!'),

  password: yup
    .string()
    .trim()
    .min(8, 'Password must be at least 8 characters!')
    .max(30, 'Password must be less than 30 characters!')
    .matches(
      REGEXP.password,
      'Password must contain lowercase and uppercase letters, numbers and special characters (@ $!% *? &)!',
    )
    .required('Password is required!'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'The two passwords that you entered do not match!')
    .required('Confirm Password is required!'),
});
