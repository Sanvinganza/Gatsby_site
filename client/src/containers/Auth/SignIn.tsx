import * as React from 'react';
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom';
import { fieldNames } from './enumerations';
import { signInValidationSchema, signUpValidationSchema } from './validations';
import ErrorMessage from 'components/ErrorMessage';
import { useHistory } from 'react-router';

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

import {useMutation} from '@apollo/react-hooks';
import { SIGNIN_USER } from './gql';

const SignIn: React.FC = () => {
const history = useHistory();

if(localStorage.getItem("token")){
  history.push("/Todos")
}
  const { register, handleSubmit, errors, setError } = useForm({
    validationSchema: signInValidationSchema,
  });



  const [signIn, { data, loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted({ signIn }) {
      if (signIn) {
        localStorage.setItem('token', signIn.token as string);
        // localStorage.setItem('userId', signIn.id as string);
      }
    }
  });

  if (loading) console.log('Submitting...');
  if (error) {console.log(`Submission error! ${error.message}`)}else{
  };

  const onSubmit = handleSubmit(async (info: any, e: any) => {
    // e.preventDefault();
    await signIn({
      variables: {
        login: info[fieldNames.email],
        password: info[fieldNames.password],
      },
    });
   
    console.log('submitted ', info);
  });

  return (
    <>
      <BackImage />
      <LogoImage />
      <OurForm onSubmit={onSubmit}>
        <TextSignIn>Sign in</TextSignIn>
        <InputForm
          type={'email'}
          ref={register({ required: true })}
          name="email"
          placeholder="E-mail"
        />
        <ErrorMessage errors={errors} name={fieldNames.email} />
        <InputForm
          type={'password'}
          ref={register({ required: true })}
          name="password"
          placeholder="Password"
        />
        <ErrorMessage errors={errors} name={fieldNames.password} />
        <p style={{color: "#ff4161"}}>{error ? "Password or email entered incorrectly" : null}</p>
        <Link to={`/resetPas`} style={{ alignSelf: 'flex-end' }}>
          <ResetPassword>Reset password</ResetPassword>
        </Link>
        <SignUpInRowConteiner>
          <Link to={`/`}>
            <ResetPassword style={{ margin: '0px', alignSelf: 'center' }}> Sing up</ResetPassword>
          </Link>
          <SignInButton type="submit">
          Sign in <Vector1 />
          </SignInButton>
        </SignUpInRowConteiner>
      </OurForm>
    </>
  );
};
export default SignIn;
