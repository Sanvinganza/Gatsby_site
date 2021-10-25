import React from 'react';
// import styled from 'styled-components';
// import useForm from 'react-hook-form';
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
} from './styled';

const SignUp: React.FC = () => {
  return (
    <div>
      <SignInForm>
        <AuthFormName>Sign Up</AuthFormName>
        <AuthFormInput placeholder="E-Mail" />
        <AuthFormInput placeholder="Name" />
        <AuthFormInput placeholder="Password" />
        <AuthFormInput placeholder="Confirm Password" />
        <SubmitBtnContainer>
          <AuthFormBtn>Sign In</AuthFormBtn>
          <AuthFormBtnSubmit type="submit">
            <AuthFormSubmitBtnContent>
              <AuthFormSubmitBtnText>Sign Up</AuthFormSubmitBtnText>
              <AuthFormSubmitBtnSvg />
            </AuthFormSubmitBtnContent>
          </AuthFormBtnSubmit>
        </SubmitBtnContainer>
      </SignInForm>
    </div>
  );
};

export default SignUp;
