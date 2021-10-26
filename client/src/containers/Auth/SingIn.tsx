import * as React from 'react';
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom';
import { fieldNames } from './enumerations';
import { signInValidationSchema } from './validations';
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
} from './styleAuth';

  const SingIn: React.FC = () => {
    const { register, handleSubmit, errors } = useForm({
      validationSchema: signInValidationSchema,
    });
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <>
      <BackImage />
      <LogoImage />
      <OurForm onSubmit={onSubmit}>
        <TextSignIn>Sing in</TextSignIn>
        <InputForm type={'email'} ref={register({ required: true})} name="email" placeholder="E-mail" />
        <ErrorMessage errors={errors} name={fieldNames.email} />
        <InputForm type={'password'} ref={register({ required: true})} name="password" placeholder="Password" />
        <ErrorMessage errors={errors} name={fieldNames.password} />
        <Link to={`/resetPas`} style={{alignSelf: "flex-end"}}>
        <ResetPassword>Reset password</ResetPassword>
          </Link>
        <SignUpInRowConteiner>
          <Link to={`/singUp`}>
            <ResetPassword style={{ margin: '0px', alignSelf: 'center' }}> Sing up</ResetPassword>
          </Link>
          <SignInButton type = "submit">
            Sing in <Vector1 />
          </SignInButton>
        </SignUpInRowConteiner>
      </OurForm>
    </>
  );
};
export default SingIn;
