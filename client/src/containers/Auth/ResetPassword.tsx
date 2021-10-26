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
  SignInStyle,
  LabelStyle,
} from './styled';

interface IFormInput {
  firstName: string;
  lastName: string;
}
const ResetPassword: React.FC<any> = () => {
  const { register } = useForm<IFormInput>();

  return (
    <>
      <Container>
        <Title>Reset password</Title>
        <label 
            htmlFor="email"
            style={LabelStyle}>
            Enter your E-mail address to reset password
        </label>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          ref={register({ required: true })}
          style={InputStyle}
        />
        <SignForm>
          <SignLink to="/SignUp">
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

export default ResetPassword;
