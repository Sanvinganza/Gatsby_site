import * as React from 'react';
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom';
import { fieldNames } from './enumerations';
import { ResetPasValidationSchema } from './validations';
import ErrorMessage from 'components/ErrorMessage';
import {
  OurForm,
  InputForm,
  TextSignIn,
  ResetPassword,
  SignUpInRowConteiner,
  SignInButton,
  Vector1,
  BackImage,
  LogoImage,
  TextEmail,
} from './styleAuth';

const ResetPas: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: ResetPasValidationSchema,
  });
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <>
      <BackImage />
      <LogoImage />
      <OurForm onSubmit={onSubmit}>
        <TextSignIn>Reset password</TextSignIn>
        <TextEmail>Enter your E-mail address to reset password</TextEmail>
        <InputForm type={'email'} ref={register} name="email" placeholder="E-mail" />
        <ErrorMessage errors={errors} name={fieldNames.email} />
        <SignUpInRowConteiner>
        <Link to={`/signIn`}>
            <ResetPassword style={{ margin: '0px', alignSelf: 'center' }}> Sign in</ResetPassword>
          </Link>
          <SignInButton>
          Reset<Vector1 />
          </SignInButton>
        </SignUpInRowConteiner>
      </OurForm>
    </>
  );
};
export default ResetPas;
