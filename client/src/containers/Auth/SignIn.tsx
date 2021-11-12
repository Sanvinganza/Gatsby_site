import React from 'react';
import useForm from 'react-hook-form';
import { fieldNames } from './enumerations';
import { signInValidationSchema } from './validations';
import ErrorMessage from 'components/ErrorMessage';
import { useLazyQuery, useMutation, useQuery } from '@apollo/react-hooks';
import { GET_USER, SIGNIN_USER } from './gql';
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

// function addServerErrors<T>(
//   errors: { [P in keyof T]?: string[] },
//   setError: (
//     fieldName: keyof T,
//     error: { type: string; message: string }
//   ) => void
// ) {
//   return Object.keys(errors).forEach((key) => {
//     setError(key as keyof T, {
//       type: "server",
//       message: errors[key as keyof T]!.join(
//         ". "
//       ),
//     });
//   });
// }

const SignIn: React.FC = () => {
  const { register, handleSubmit, errors, setError } = useForm({
    validationSchema: signInValidationSchema,
  });

  const [SignIn, { data, loading, error }] = useMutation(SIGNIN_USER);
  if (loading) console.log('Submitting...');
  if (error) console.log(`Submission error! ${error.message}`);

  const onSubmit = handleSubmit(async (data: any, e: any) => {
    // e.preventDefault();
    await SignIn({
      variables: {
        login: data[fieldNames.email],
        password: data[fieldNames.password],
      },
    });

    // if (!result.success && result.errors) {
    //   addServerErrors(result.errors, setError);
    // if(values) return <Redirect to="/" />
    // else console.log('opppopopp ', values);
    console.log('submitted ', data);
  });
  // const onError = (errors: any, e: any) => console.log(errors, e);

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
