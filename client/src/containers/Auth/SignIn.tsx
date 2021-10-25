import React from 'react';
// import useForm from 'react-hook-form';
import { Container, Title } from './styled';

interface IFormInput {
  firstName: string;
  lastName: string;
}
const SignIn: React.FC<any> = () => {
  //   const { register, handleSubmit } = useForm<IFormInput>();

  return (
    <Container>
      <Title>Sign in</Title>
    </Container>
  );
};

export default SignIn;
