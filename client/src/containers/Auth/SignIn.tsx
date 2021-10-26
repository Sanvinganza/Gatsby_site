import React from 'react';
import useForm from 'react-hook-form';
import { fieldNames } from './enumerations';
import { signInValidationSchema } from './validations';
import ErrorMessage from 'components/ErrorMessage';
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
  const { register, handleSubmit, errors } = useForm({
    validationSchema: signInValidationSchema,
  });

  const onSubmit = handleSubmit(data => {
    console.log('submitted ', data);
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
