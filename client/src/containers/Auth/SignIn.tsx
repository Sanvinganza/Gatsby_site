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
  password: string;
};

const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit(() => {});

  return (
    <AuthWrapper>
      <AuthLogo />
      <AuthFormContainer onSubmit={onSubmit}>
        <AuthFormTitle>Sign in</AuthFormTitle>
        <AuthInput name="eMail" ref={register} placeholder="E-Mail" />
        <AuthInput name="password" ref={register} placeholder="Password" />
        <AuthTextStyle>Reset password</AuthTextStyle>
        <AuthSignUpSignIn>
          <Link to="/SignUp">
            <AuthTextStyle>Sign up</AuthTextStyle>
          </Link>
          <Link to="/Todos">
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

export default SignIn;
