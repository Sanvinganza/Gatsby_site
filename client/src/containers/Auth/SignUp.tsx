import React from 'react';
import useForm from 'react-hook-form';
import { fieldNames } from './enumerations';
import { signUpValidationSchema } from './validations';
import ErrorMessage from 'components/ErrorMessage';
import {
  SignInForm,
  AuthFormName,
  AuthFormInput,
  AuthFormSubmitBtnSvg,
  AuthFormBtnSubmit,
  AuthFormSubmitBtnContent,
  SubmitBtnContainer,
  AuthFormSubmitBtnText,
  AuthWrapper,
  AuthLogo,
  AuthFormLink,
} from './styled';

type FormValues = {
  eMail: string;
  name: string;
  password: string;
  confirmPassword: string;
};

const SignUp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: signUpValidationSchema,
  });

  const onSubmit = handleSubmit(data => {
    console.log('submitted ', data);
  });
  return (
    <AuthWrapper>
      <AuthLogo />
      <SignInForm onSubmit={onSubmit}>
        <AuthFormName>Sign Up</AuthFormName>
        <AuthFormInput name="email" ref={register} placeholder="E-Mail" />
        <ErrorMessage errors={errors} name={fieldNames.email} />
        <AuthFormInput name="Name" ref={register} placeholder="Name" />
        <ErrorMessage errors={errors} name={fieldNames.Name} />
        <AuthFormInput name="password" ref={register} placeholder="Password" />
        <ErrorMessage errors={errors} name={fieldNames.password} />
        <AuthFormInput name="confirmPassword" ref={register} placeholder="Confirm Password" />
        <ErrorMessage errors={errors} name={fieldNames.confirmPassword} />
        <SubmitBtnContainer>
          <AuthFormLink to="/SignIn">Sign In</AuthFormLink>
          <AuthFormBtnSubmit type="submit">
            <AuthFormSubmitBtnContent>
              <AuthFormSubmitBtnText>Sign Up</AuthFormSubmitBtnText>
              <AuthFormSubmitBtnSvg />
            </AuthFormSubmitBtnContent>
          </AuthFormBtnSubmit>
        </SubmitBtnContainer>
      </SignInForm>
    </AuthWrapper>
  );
};

export default SignUp;
