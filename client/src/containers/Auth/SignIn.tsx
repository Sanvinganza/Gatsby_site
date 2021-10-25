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
  AuthFormBtnContainer,
  AuthFormSubmitBtnText,
  AuthFormBtnRight,
} from './styled';

const SignIn: React.FC = () => {
  return (
    <div>
      <SignInForm>
        <AuthFormName>Sign In</AuthFormName>
        <AuthFormInput placeholder="E-Mail" />
        <AuthFormInput placeholder="Password" />
        <AuthFormBtnRight>Reset password</AuthFormBtnRight>
        <AuthFormBtnContainer>
          <AuthFormBtn>Sign up</AuthFormBtn>
          <AuthFormBtnSubmit type="submit">
            <AuthFormSubmitBtnContent>
              <AuthFormSubmitBtnText>Sign In</AuthFormSubmitBtnText>
              <AuthFormSubmitBtnSvg />
            </AuthFormSubmitBtnContent>
          </AuthFormBtnSubmit>
        </AuthFormBtnContainer>
      </SignInForm>
    </div>
  );
};

export default SignIn;
