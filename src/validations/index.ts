import * as yup from 'yup';
import { REGEXP } from '../utils/constants';

export const LoginSchema = yup.object({
  username: yup
    .string()
    .trim()
    .min(2, 'Username must be at least 2 characters!')
    .max(30, 'Username must be less than 30 characters!')
    .matches(REGEXP.username, 'Username can contain only letters and numbers, only numbers cannot be!')
    .required('Username is required!'),

  password: yup
    .string()
    .trim()
    .min(8, 'Password must be at least 8 characters!')
    .max(30, 'Password must be less than 30 characters!')
    .matches(REGEXP.password, 'Incorrect Password!')
    .required('Password is required!'),
});

export const RegisterSchema = yup.object({
  username: yup
    .string()
    .trim()
    .min(2, 'Username must be at least 2 characters!')
    .max(30, 'Username must be less than 30 characters!')
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
