import * as React from 'react';
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom';
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

type FormData = {
  firstName: string;
  lastName: string;
};

const ResetPas: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));
  // firstName and lastName will have correct type

  return (
    <>
      <BackImage />
      <LogoImage />
      <OurForm onSubmit={onSubmit}>
        <TextSignIn>Reset password</TextSignIn>
        <TextEmail>Enter your E-mail address to reset password</TextEmail>
        <InputForm type={'email'} ref={register} name="E-mail" placeholder="E-mail" />
        <SignUpInRowConteiner>
        <Link to={`/singIn`}>
            <ResetPassword style={{ margin: '0px', alignSelf: 'center' }}> Sing in</ResetPassword>
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
