import * as React from 'react';
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom';
import { signUpValidationSchema } from './validations';
import { fieldNames } from './enumerations';
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
import { useMutation } from '@apollo/react-hooks';
import {SIGNUP_USER } from './gql';


const SingUp: React.FC = () => {

  const history = useHistory();

if(localStorage.getItem("token")){
  history.push("/singIn")
}

  const { register, handleSubmit, errors } = useForm({
    validationSchema: signUpValidationSchema,
  });

  const [signUp, { data, loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted({ signUp }) {
      if (signUp) {
        history.push("/singIn")
      }
    }
  });

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
    <>
      <BackImage />
      <LogoImage />
      <OurForm onSubmit={onSubmit}>
        <TextSignIn>Sign up</TextSignIn>

        <InputForm type={'email'} ref={register} name="email" placeholder="E-mail" />
        <ErrorMessage errors={errors} name={fieldNames.email} />

        <InputForm type={'text'} ref={register} name="Name" placeholder="Name" />
        <ErrorMessage errors={errors} name={fieldNames.Name} />

        <InputForm type={'password'} ref={register} name="password" placeholder="Password" />
        <ErrorMessage errors={errors} name={fieldNames.password} />

        <InputForm
          type={'password'}
          ref={register}
          name="confirmPassword"
          placeholder="Confirm password"
        />
        <ErrorMessage errors={errors} name={fieldNames.confirmPassword} />

        <SignUpInRowConteiner>
          <Link to={`/singIn`}>
            <ResetPassword style={{ margin: '0px', alignSelf: 'center' }}> Sing in</ResetPassword>
          </Link>
          <SignInButton>
          Sign up <Vector1 />
          </SignInButton>
        </SignUpInRowConteiner>
      </OurForm>
    </>
  );
};
export default SingUp;