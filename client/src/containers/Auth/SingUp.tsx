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

const SingUp: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));
  // firstName and lastName will have correct type

  return (
    <>
      <BackImage />
      <LogoImage />
      <OurForm style={{ height: '520px' }} onSubmit={onSubmit}>
        <TextSignIn>Sing up</TextSignIn>
        <InputForm type={'email'} ref={register} name="E-mail" placeholder="E-mail" />
        <InputForm type={'text'} ref={register} name="Name" placeholder="Name" />
        <InputForm type={'password'} ref={register} name="Password" placeholder="Password" />
        <InputForm
          type={'password'}
          ref={register}
          name="ConfirmPassword"
          placeholder="Confirm password"
        />
        <SignUpInRowConteiner>
          <Link to={`/singIn`}>
            <ResetPassword style={{ margin: '0px', alignSelf: 'center' }}> Sing in</ResetPassword>
          </Link>
          <SignInButton>
            Sing up <Vector1 />
          </SignInButton>
        </SignUpInRowConteiner>
      </OurForm>
    </>
  );
};
export default SingUp;
