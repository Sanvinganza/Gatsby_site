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
  SignInStyle,
  LabelStyle,
  Input,
  Button,
} from './styled';
import { fieldNames, resetPasswordSchema } from './validations';

const ResetPassword: React.FC<any> = () => {
  const { register, errors, handleSubmit } = useForm({
    validationSchema: resetPasswordSchema
  });

  const onSubmit = handleSubmit(data => {
    console.log('submitted ', data);
  });
  
  return (
    <>
      <Container onSubmit={onSubmit}>
        <Title>Reset password</Title>
        <label htmlFor="email" style={LabelStyle}>
          Enter your E-mail address to reset password
        </label>
        <Input type="email" name={fieldNames.email} placeholder="E-mail" ref={register}/>
        <ErrorMessage errors={errors} name={fieldNames.email} />
        
        <SignForm>
          <SignLink to="/SignUp">Sign up</SignLink>
          <Button type="submit" style={SignInStyle}>
            Reset &nbsp; &nbsp; &rarr;
          </Button>
        </SignForm>
      </Container>
      <Background />
      <Logo />
    </>
  );
};

export default ResetPassword;
