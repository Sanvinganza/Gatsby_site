import React from 'react';
import useForm from 'react-hook-form';
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
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit(data => {
    console.log('submitted ', data);
  });
  return (
    <AuthWrapper>
      <AuthLogo />
      <SignInForm onSubmit={onSubmit}>
        <AuthFormName>Sign Up</AuthFormName>
        <AuthFormInput name="eMail" ref={register} placeholder="E-Mail" />
        <AuthFormInput name="name" ref={register} placeholder="Name" />
        <AuthFormInput name="password" ref={register} placeholder="Password" />
        <AuthFormInput name="confirmPassword" ref={register} placeholder="Confirm Password" />
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
