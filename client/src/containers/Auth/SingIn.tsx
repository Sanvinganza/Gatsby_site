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
} from './styleAuth';

type FormData = {
  firstName: string;
  lastName: string;
};

const SingIn: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));
  // firstName and lastName will have correct type

  return (
    <>
      <BackImage />
      <LogoImage />
      <OurForm onSubmit={onSubmit}>
        <TextSignIn>Sing in</TextSignIn>
        <InputForm type={'email'} ref={register} name="E-mail" placeholder="E-mail" />
        <InputForm type={'password'} ref={register} name="Password" placeholder="Password" />
        <ResetPassword>Reset password</ResetPassword>
        <SignUpInRowConteiner>
          <Link to={`/singUp`}>
            <ResetPassword style={{ margin: '0px', alignSelf: 'center' }}> Sing up</ResetPassword>
          </Link>
          <SignInButton>
            Sing in <Vector1 />
          </SignInButton>
        </SignUpInRowConteiner>
      </OurForm>
    </>
  );
};
export default SingIn;
