import * as yup from 'yup';
import { fieldNames } from './enumerations';

export const signInValidationSchema = yup.object().shape({
  [fieldNames.password]: yup
    .string()
    .min(3, 'Password too short')
    .max(12, 'Password too long')
    .matches(/^(?=.*[a-z])/, 'Must contain at least one lowercase character')
    .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
    .matches(/^(?=.*[!@#%&])/, 'Must contain at least one special character')
    .required('Please Enter your password'),
  [fieldNames.email]: yup
    .string()
    .email()
    .required('Please Enter your email'),
  [fieldNames.name]: yup.string().required('Please Enter your name'),
});
