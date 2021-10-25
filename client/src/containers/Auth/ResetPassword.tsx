import React from 'react';
// import styled from 'styled-components';
import useForm from 'react-hook-form';
import {
  SignInForm,
  AuthFormName,
  AuthFormInput,
  AuthFormSubmitBtnSvg,
  AuthFormBtn,
  AuthFormBtnSubmit,
  AuthFormSubmitBtnContent,
  SubmitBtnContainer,
  AuthFormSubmitBtnText,
  ResetPasswordText,
} from './styled';

const ResetPassword: React.FC = () => {
  return (
    <div>
      <SignInForm>
        <AuthFormName>Reset Password</AuthFormName>
        <ResetPasswordText>Enter your E-mail address to reset password</ResetPasswordText>
        <AuthFormInput placeholder="E-Mail" />
        <SubmitBtnContainer>
          <AuthFormBtn>Sign up</AuthFormBtn>
          <AuthFormBtnSubmit type="submit">
            <AuthFormSubmitBtnContent>
              <AuthFormSubmitBtnText>Sign In</AuthFormSubmitBtnText>
              <AuthFormSubmitBtnSvg />
            </AuthFormSubmitBtnContent>
          </AuthFormBtnSubmit>
        </SubmitBtnContainer>
      </SignInForm>
    </div>
  );
};

export default ResetPassword;
