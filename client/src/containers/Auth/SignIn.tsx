import React from 'react';
import useForm from 'react-hook-form';
import { fieldNames } from './enumerations';
import { signInValidationSchema } from './validations';
import ErrorMessage from 'components/ErrorMessage';
import FullPageLoader from 'components/Loaders/FullPageLoader';
import { useMutation } from '@apollo/react-hooks';
import { SIGNIN_USER } from './gql';
import { RouteComponentProps, useHistory, withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import {
  SignInForm,
  AuthFormName,
  AuthFormInput,
  AuthFormSubmitBtnSvg,
  AuthFormBtnSubmit,
  AuthFormSubmitBtnContent,
  AuthFormBtnContainer,
  AuthFormSubmitBtnText,
  AuthFormLinkRight,
  AuthFormLink,
  AuthWrapper,
  AuthLogo,
} from './styled';

const SignIn: React.FC = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, setError } = useForm({
    validationSchema: signInValidationSchema,
  });

  const [signIn, { data, loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted({ signIn }) {
      if (signIn) {
        localStorage.setItem('token', signIn.token as string);
        localStorage.setItem('userId', signIn.userID as string);
        history.push('/');
      }
    },
  });
  if (loading) return <FullPageLoader />;
  if (error) console.log(error.message); //return <p>{error.message}</p>;
  console.log(data);
  const onSubmit = handleSubmit(async (formData: any, e: any) => {
    await signIn({
      variables: {
        login: formData[fieldNames.email],
        password: formData[fieldNames.password],
      },
    });
    console.log('submitted ', formData);
  });

  return (
    <AuthWrapper>
      <AuthLogo />
      <SignInForm onSubmit={onSubmit}>
        <AuthFormName>Sign In</AuthFormName>
        <AuthFormInput name="email" ref={register} placeholder="E-Mail" />
        <ErrorMessage errors={errors} name={fieldNames.email} />
        <AuthFormInput name="password" ref={register} placeholder="Password" />
        <ErrorMessage errors={errors} name={fieldNames.password} />
        <AuthFormLinkRight to="ResetPassword">Reset password</AuthFormLinkRight>
        <AuthFormBtnContainer>
          <AuthFormLink to="/SignUp">Sign up</AuthFormLink>
          <AuthFormBtnSubmit type="submit">
            <AuthFormSubmitBtnContent>
              <AuthFormSubmitBtnText>Sign In</AuthFormSubmitBtnText>
              <AuthFormSubmitBtnSvg />
            </AuthFormSubmitBtnContent>
          </AuthFormBtnSubmit>
        </AuthFormBtnContainer>
      </SignInForm>
    </AuthWrapper>
  );
};

export default SignIn;
