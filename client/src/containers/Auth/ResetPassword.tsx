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

type FormValues = {
  eMail: string;  
}; 

const ResetPassword: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit(data => {
    console.log("submitted ", data);
  }); 
  return (
    <div>
      <SignInForm onSubmit={onSubmit}>
        <AuthFormName>Reset Password</AuthFormName>
        <ResetPasswordText>Enter your E-mail address to reset password</ResetPasswordText>
        <AuthFormInput name='eMail' ref={register} placeholder="E-Mail" />
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
