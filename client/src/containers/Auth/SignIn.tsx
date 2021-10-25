import React from 'react';
import useForm from 'react-hook-form';
import {
  Background,
  Container,
  InputStyle,
  Logo,
  Title,
  SignLink,
  SignForm,
  ResetPasswordStyle,
  SignUpStyle,
  SignInStyle,
} from './styled';

interface IFormInput {
  firstName: string;
  lastName: string;
}
const SignIn: React.FC<any> = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  return (
    <>
      <Container>
        <Title>Sign in</Title>
        <input
          type="email"
          placeholder="E-mail"
          ref={register({ required: true })}
          style={InputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          ref={register({ required: true })}
          style={InputStyle}
        />
        <SignLink to="/ResetPassword" style={ResetPasswordStyle}>
          Reset password
        </SignLink>
        <SignForm>
          <SignLink to="/SignUp" style={SignUpStyle}>
            Sign up
          </SignLink>
          <SignLink to="/SignIn" style={SignInStyle}>
            Sign in &nbsp; &nbsp; &rarr;
          </SignLink>
        </SignForm>
      </Container>
      <Background />
      <Logo />
    </>
  );
};

export default SignIn;
