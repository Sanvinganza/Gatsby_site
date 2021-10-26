import React from 'react';
import useForm from 'react-hook-form';
import {
  SignInForm,
  AuthFormName,
  AuthFormInput,
  AuthFormSubmitBtnSvg,
  AuthFormBtnSubmit,
  AuthFormSubmitBtnContent,
  AuthFormBtnContainer,
  AuthFormSubmitBtnText,
  AuthFormLinkRight,
  AuthFormLink,
  AuthWrapper,
  AuthLogo,
} from './styled';

type FormValues = {
  eMail: string;
  password: string;
};

const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit(data => {
    console.log('submitted ', data);
  });

  return (
    <AuthWrapper>
      <AuthLogo />
      <SignInForm onSubmit={onSubmit}>
        <AuthFormName>Sign In</AuthFormName>
        <AuthFormInput name="eMail" ref={register} placeholder="E-Mail" />
        <AuthFormInput name="password" ref={register} placeholder="Password" />
        <AuthFormLinkRight to="ResetPassword">Reset password</AuthFormLinkRight>
        <AuthFormBtnContainer>
          <AuthFormLink to="/SignUp">Sign up</AuthFormLink>
          <AuthFormBtnSubmit type="submit">
            <AuthFormSubmitBtnContent>
              <AuthFormSubmitBtnText>Sign In</AuthFormSubmitBtnText>
              <AuthFormSubmitBtnSvg />
            </AuthFormSubmitBtnContent>
          </AuthFormBtnSubmit>
        </AuthFormBtnContainer>
      </SignInForm>
    </AuthWrapper>
  );
};

export default SignIn;
