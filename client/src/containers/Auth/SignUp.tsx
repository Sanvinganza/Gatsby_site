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

const SignUp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: signInValidationSchema,
  });

  const onSubmit = handleSubmit((data: any) => {
    alert(JSON.stringify(data));
  });

  return (
    <AuthWrapper>
      <AuthLogo />
      <AuthFormContainer style={{ top: '80px' }} onSubmit={onSubmit}>
        <AuthFormTitle>Sign up</AuthFormTitle>
        <AuthInput name="email" ref={register} placeholder="E-Mail" />
        <ErrorMessage errors={errors} name={fieldNames.email} />
        <AuthInput name="name" ref={register} placeholder="Name" />
        <ErrorMessage errors={errors} name={fieldNames.name} />
        <AuthInput name="password" ref={register} placeholder="password" />
        <ErrorMessage errors={errors} name={fieldNames.password} />
        <AuthInput name="confirmPassword" ref={register} placeholder="Confirm password" />
        <AuthSignUpSignIn>
          {/* <Link to="/SignUp"> */}
          <AuthTextStyle>Sign up</AuthTextStyle>
          {/* </Link> */}
          {/* <Link to="/ResetPassword"> */}
          <AuthButton type="submit">
            <AuthTextStyle>Sign in</AuthTextStyle>
            <AuthButtonArrow />
          </AuthButton>
          {/* </Link> */}
        </AuthSignUpSignIn>
      </AuthFormContainer>
    </AuthWrapper>
  );
};

export default SignUp;
