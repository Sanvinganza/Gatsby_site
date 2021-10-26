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
} from './styled';

interface IFormInput {
  firstName: string;
  lastName: string;
}
const SignUp: React.FC<any> = () => {
  const { register } = useForm<IFormInput>();

  return (
    <>
      <Container>
        <Title>Sign up</Title>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          ref={register({ required: true })}
          style={InputStyle}
        />
        <input
          type="text"
          placeholder="Name"
          ref={register({ required: true })}
          style={InputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          ref={register({ required: true })}
          style={InputStyle}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          ref={register({ required: true })}
          style={InputStyle}
        />
        <SignForm>
          <SignLink to="/SignIn">
            Sign in
          </SignLink>
          <SignLink to="/SignUp" style={SignInStyle}>
            Sign up &nbsp; &nbsp; &rarr;
          </SignLink>
        </SignForm>
      </Container>
      <Background />
      <Logo />
    </>
  );
};

export default SignUp;
