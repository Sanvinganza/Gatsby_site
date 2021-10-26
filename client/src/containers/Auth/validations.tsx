/*
 * VALIDATIONS
 * Object schema validation
 * @see https://github.com/jquense/yup
 */

import * as yup from 'yup';

enum fieldNames {
    firstName = 'firstName',
    lastName = 'lastName',
    password = 'password',
    confirmPassword = 'confirmPassword',
    email = 'email',
};

export const validationSchema = yup.object().shape({
  [fieldNames.firstName]: yup
    .string()
    .min(4)
    .max(30)
    .required(),
  [fieldNames.lastName]: yup
    .string()
    .min(4)
    .max(30)
    .required(),
  [fieldNames.password]: yup
    .string()
    .min(3, 'Password too short')
    .max(12, 'Password too long')
    .matches(/^(?=.*[a-z])/, 'Must contain at least one lowercase character')
    .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
    .matches(/^(?=.*[!@#%&])/, 'Must contain at least one special character')
    .required('Please Enter your password'),
  [fieldNames.confirmPassword]: yup
    .string()
    .min(4)
    .max(30)
    .required(),
  [fieldNames.email]: yup
    .string()
    .email()
    .required('Please Enter your Email'),
});
