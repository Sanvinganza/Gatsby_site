import React from 'react';
import useForm from "react-hook-form";
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

type FormValues = {
  eMail: string;
  password: string;
}; 

const SignIn: React.FC = () => {
 
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit(data => {
    console.log("submitted ", data);
  }); 

  return (
    <div>
      <SignInForm  onSubmit={onSubmit}>
        <AuthFormName>Sign In</AuthFormName>
        <AuthFormInput name="eMail" ref={register} placeholder="E-Mail" />
        <AuthFormInput name="password" ref={register} placeholder="Password" />
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
