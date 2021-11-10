import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom';
import { fieldNames } from './enumerations';
import { signInValidationSchema } from './validation';
import ErrorMessage from 'components/ErrorMessage';
import { GET_USER } from './gql';
import { useLazyQuery } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';

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
  const { register, errors } = useForm({
    validationSchema: signInValidationSchema,
  });

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [loadUser, { loading, data }] = useLazyQuery(GET_USER, {
    variables: {
      login: login,
      password: password,
    },
  });

  if (data && data.getUser) {
    if (data.getUser.length === 0) {
      alert('Такого пользователя нет в базе');
    } else {
      return <Redirect to="/MainPage" />;
    }
  }

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    loadUser();
  };

  return (
    <AuthWrapper>
      <AuthLogo />
      <AuthFormContainer onSubmit={onFormSubmit}>
        <AuthFormTitle>Sign in</AuthFormTitle>
        <AuthInput
          ref={register}
          placeholder="E-Mail"
          value={login}
          onChange={e => setLogin(e.target.value)}
          name={fieldNames.email}
        />
        <ErrorMessage errors={errors} name={fieldNames.email} />
        <AuthInput
          ref={register}
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          name={fieldNames.password}
        />
        <ErrorMessage errors={errors} name={fieldNames.password} />
        <AuthTextStyle>Reset password</AuthTextStyle>
        <AuthSignUpSignIn>
          <Link to="/SignUp">
            <AuthTextStyle>Sign up</AuthTextStyle>
          </Link>

          <AuthButton type="submit">
            <AuthTextStyle>Sign in</AuthTextStyle>
            <AuthButtonArrow />
          </AuthButton>
        </AuthSignUpSignIn>
      </AuthFormContainer>
    </AuthWrapper>
  );
};

export default SignIn;
