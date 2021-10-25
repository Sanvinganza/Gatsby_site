import React from 'react';
import useForm from 'react-hook-form';

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
  AuthTextGray,
} from './styled';

type FormValues = {
  eMail: string;
};

const ResetPassword: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit(() => {});

  return (
    <AuthWrapper>
      <AuthLogo />
      <AuthFormContainer onSubmit={onSubmit}>
        <AuthFormTitle>Reset password</AuthFormTitle>
        <AuthTextGray>Enter your E-mail address to reset password</AuthTextGray>
        <AuthInput style={{ margin: 0 }} name="eMail" ref={register} placeholder="E-Mail" />
        <AuthSignUpSignIn>
          <AuthTextStyle>Sign up</AuthTextStyle>
          <AuthButton type="submit">
            <AuthTextStyle>Reset</AuthTextStyle>
            <AuthButtonArrow />
          </AuthButton>
        </AuthSignUpSignIn>
      </AuthFormContainer>
    </AuthWrapper>
  );
};

export default ResetPassword;
