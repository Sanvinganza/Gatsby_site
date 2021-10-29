import ErrorMessage from 'components/ErrorMessage';
import React from 'react';
import useForm from 'react-hook-form';
import {
  Background,
  Container,
  Logo,
  Title,
  SignLink,
  SignForm,
  ResetPasswordStyle,
  SignInStyle,
  Input,
  Button,
} from './styled';
import { fieldNames, signInSchema } from './validations';

interface IFormInput {
  firstName: string;
  lastName: string;
}
const SignIn: React.FC<any> = () => {
  const { register, errors, handleSubmit } = useForm({
    validationSchema: signInSchema,
  });
  const onSubmit = handleSubmit(data => {
    console.log('submitted ', data);
  });

  return (
    <>
      <Container onSubmit={onSubmit}>
        <Title>Sign in</Title>

        <Input type="email" name={fieldNames.email} placeholder="E-mail" ref={register} />
        <ErrorMessage errors={errors} name={fieldNames.email} />

        <Input type="password" placeholder="Password" name={fieldNames.password} ref={register} />
        <ErrorMessage errors={errors} name={fieldNames.password} />

        <SignLink to="/ResetPassword" style={ResetPasswordStyle}>
          Reset password
        </SignLink>

        <SignForm>
          <SignLink to="/SignUp">Sign up</SignLink>
          <Button type="submit" style={SignInStyle}>
            Sign ip &nbsp; &nbsp; &rarr;
          </Button>
        </SignForm>
      </Container>
      <Background />
      <Logo />
    </>
  );
};

export default SignIn;
