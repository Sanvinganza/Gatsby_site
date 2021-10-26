import React from 'react';
import useForm from 'react-hook-form';
import { fieldNames } from './enumerations';
import { signInValidationSchema } from './validation';
import ErrorMessage from 'components/ErrorMessage';

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

const ResetPassword: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: signInValidationSchema,
  });
  const onSubmit = handleSubmit(() => {});

  return (
    <AuthWrapper>
      <AuthLogo />
      <AuthFormContainer onSubmit={onSubmit}>
        <AuthFormTitle>Reset password</AuthFormTitle>
        <AuthTextGray>Enter your E-mail address to reset password</AuthTextGray>
        <AuthInput style={{ margin: 0 }} name="email" ref={register} placeholder="E-Mail" />
        <ErrorMessage errors={errors} name={fieldNames.email} />
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
