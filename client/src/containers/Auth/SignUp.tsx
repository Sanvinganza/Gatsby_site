import React from 'react';
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom';

import {
  AuthWrapper,
  AuthLogo,
  AuthFormContainer,
  AuthFormTitle,
  AuthInput,
  AuthTextStyle,
  AuthSignUpSignIn,
  AuthButton,
  AuthButtonArrow,
} from './styled';

type FormValues = {
  eMail: string;
  Name: string;
  password: string;
  confirmPassword: string;
};

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit(() => {});

  return (
    <AuthWrapper>
      <AuthLogo />
      <AuthFormContainer style={{ top: '131px' }} onSubmit={onSubmit}>
        <AuthFormTitle>Sign up</AuthFormTitle>
        <AuthInput name="eMail" ref={register} placeholder="E-Mail" />
        <AuthInput name="Name" ref={register} placeholder="Name" />
        <AuthInput name="password" ref={register} placeholder="password" />
        <AuthInput name="confirmPassword" ref={register} placeholder="Confirm password" />
        <AuthSignUpSignIn>
          <Link to="/SignUp">
            <AuthTextStyle>Sign up</AuthTextStyle>
          </Link>
          <Link to="/ResetPassword">
            <AuthButton type="submit">
              <AuthTextStyle>Sign in</AuthTextStyle>
              <AuthButtonArrow />
            </AuthButton>
          </Link>
        </AuthSignUpSignIn>
      </AuthFormContainer>
    </AuthWrapper>
  );
};

export default SignUp;
