import React from 'react';
import useForm from 'react-hook-form';
import { fieldNames } from './enumerations';
import { signUpValidationSchema } from './validations';
import ErrorMessage from 'components/ErrorMessage';
import FullPageLoader from 'components/Loaders/FullPageLoader';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router';
import { SIGNUP_USER } from './gql';
import {
  SignInForm,
  AuthFormName,
  AuthFormInput,
  AuthFormSubmitBtnSvg,
  AuthFormBtnSubmit,
  AuthFormSubmitBtnContent,
  SubmitBtnContainer,
  AuthFormSubmitBtnText,
  AuthWrapper,
  AuthLogo,
  AuthFormLink,
} from './styled';

const SignUp: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: signUpValidationSchema,
  });
  const [signUp, { data, loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted({ signUp }) {
      if (signUp) {
        // localStorage.setItem('token', SignUp.token as string);
        // localStorage.setItem('userId', SignUp.userID as string);
        history.push('/SignIn');
      }
    },
  });
  if (loading) return <FullPageLoader />;
  if (error) console.log(error.message); //return <p>{error.message}</p>;
  const onSubmit = handleSubmit(values => {
    signUp({
      variables: {
        email: values[fieldNames.email],
        password: values[fieldNames.password],
        username: values[fieldNames.Name],
      },
    });
    console.log('submitted ', values);
  });
  return (
    <AuthWrapper>
      <AuthLogo />
      <SignInForm onSubmit={onSubmit}>
        <AuthFormName>Sign Up</AuthFormName>
        <AuthFormInput name="email" ref={register} placeholder="E-Mail" />
        <ErrorMessage errors={errors} name={fieldNames.email} />
        <AuthFormInput name="Name" ref={register} placeholder="Name" />
        <ErrorMessage errors={errors} name={fieldNames.Name} />
        <AuthFormInput name="password" ref={register} placeholder="Password" />
        <ErrorMessage errors={errors} name={fieldNames.password} />
        <AuthFormInput name="confirmPassword" ref={register} placeholder="Confirm Password" />
        <ErrorMessage errors={errors} name={fieldNames.confirmPassword} />
        <SubmitBtnContainer>
          <AuthFormLink to="/SignIn">Sign In</AuthFormLink>
          <AuthFormBtnSubmit type="submit">
            <AuthFormSubmitBtnContent>
              <AuthFormSubmitBtnText>Sign Up</AuthFormSubmitBtnText>
              <AuthFormSubmitBtnSvg />
            </AuthFormSubmitBtnContent>
          </AuthFormBtnSubmit>
        </SubmitBtnContainer>
      </SignInForm>
    </AuthWrapper>
  );
};

export default SignUp;
