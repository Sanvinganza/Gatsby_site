import React, { useState } from 'react';
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
import { CREATE_USER, GET_USERS } from './gql';
import { useMutation } from '@apollo/react-hooks';

const SignUp: React.FC<any> = () => {
  const { register, errors, handleSubmit, setValue, getValues, setError } = useForm({
    validationSchema: SignUpSchema,
  });

  const [createUsers] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  React.useEffect(() => {
    register({ name: fieldNames.name });
  });

  const onSubmit = (data: any) => {
    const response = createUsers({
      variables: {
        email: data.email,
        password: data.password,
        name: data.name
      },
    });

    response.catch(() => {
      setError("email", 
        "manual",
        "Email already exist!"
      );
    })
      
    setValue('email', '');
    setValue('name', '');
    setValue('password', '');
    setValue('confirmPassword', '');
  };

  return (
    <>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign up</Title>

        <Input type="email" name={fieldNames.email} placeholder="E-mail" ref={register} onChange={e => {
          setValue('email', e.target.value);
        }} />
        <ErrorMessage errors={errors} name={fieldNames.email} />

        <Input type="text" name={fieldNames.name} placeholder="Name" ref={register} onChange={e => {
          setValue('name', e.target.value)
        }} />
        <ErrorMessage errors={errors} name={fieldNames.name} />

        <Input type="password" placeholder="Password" name={fieldNames.password} ref={register} onChange={e => {
          setValue('password', e.target.value)
          console.log(e.target.value)
        }} />
        <ErrorMessage errors={errors} name={fieldNames.password} />

        <Input
          type="password"
          placeholder="Confirm Password"
          name={fieldNames.confirmPassword}
          ref={register}
        />
        <ErrorMessage errors={errors} name={fieldNames.confirmPassword} />

        <SignForm>
          <SignLink to="/SignIn">Sign in</SignLink>
          <Button
            type="submit"
            style={SignInStyle}
          >
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
