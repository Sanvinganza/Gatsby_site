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
  Input,
  Button,
} from './styled';
import { fieldNames, SignUpSchema } from './validations';
import ErrorMessage from 'components/ErrorMessage';

const SignUp: React.FC<any> = () => {
  const { register, errors, handleSubmit } = useForm({
    validationSchema: SignUpSchema,
  });

  const onSubmit = handleSubmit(data => {
    console.log('submitted ', data);
  });

  return (
    <>
      <Container onSubmit={onSubmit}>
        <Title>Sign up</Title>

        <Input type="email" name={fieldNames.email} placeholder="E-mail" ref={register}/>
        <ErrorMessage errors={errors} name={fieldNames.email} />
        
        <Input type="text" name={fieldNames.name} placeholder="Name" ref={register}/>
        <ErrorMessage errors={errors} name={fieldNames.name} />
        
        <Input type="password" placeholder="Password" name={fieldNames.password} ref={register} />
        <ErrorMessage errors={errors} name={fieldNames.password} />
        
        <Input type="password" placeholder="Confirm Password" name={fieldNames.confirmPassword} ref={register} />
        <ErrorMessage errors={errors} name={fieldNames.confirmPassword} />

        <SignForm>
          <SignLink to="/SignIn">Sign in</SignLink>
          <Button type="submit" style={SignInStyle}>
            Sign up &nbsp; &nbsp; &rarr;
          </Button>
        </SignForm>
        
      </Container>
      <Background />
      <Logo />
    </>
  );
};

export default SignUp;
