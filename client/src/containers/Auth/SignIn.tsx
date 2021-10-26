import React from 'react';
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom';
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
} from './styled';

const SignIn: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: signInValidationSchema,
  });

  const onSubmit = handleSubmit((data: any) => {
    alert(JSON.stringify(data));
  });

  return (
    <AuthWrapper>
      <AuthLogo />
      <AuthFormContainer onSubmit={onSubmit}>
        <AuthFormTitle>Sign in</AuthFormTitle>
        <AuthInput name="email" ref={register} placeholder="E-Mail" />
        <ErrorMessage errors={errors} name={fieldNames.email} />
        <AuthInput name="password" ref={register} placeholder="Password" />
        <ErrorMessage errors={errors} name={fieldNames.password} />
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
