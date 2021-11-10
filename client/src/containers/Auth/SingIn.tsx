import * as React from 'react';
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom';
import { fieldNames } from './enumerations';
import { signInValidationSchema, signUpValidationSchema } from './validations';
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

import { CREATE_USERS, GET_USERS } from './gql';
import { useMutation } from 'react-apollo';

const SingIn: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: signInValidationSchema,
  });
  const [createUsers, { loading }] = useMutation(CREATE_USERS, {
    refetchQueries: [{ query: GET_USERS }],
  });

  React.useEffect(() => {
    register({ name: fieldNames.Name });
  });

  const onSubmit = handleSubmit(data => {
    createUsers({
      variables: {
        username: data.Name,
        email: data.email,
        password: data.password,
      },
    });
  });
  return (
    <>
      <BackImage />
      <LogoImage />
      <OurForm onSubmit={onSubmit}>
        <TextSignIn>Sing in</TextSignIn>
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
        <Link to={`/resetPas`} style={{ alignSelf: 'flex-end' }}>
          <ResetPassword>Reset password</ResetPassword>
        </Link>
        <SignUpInRowConteiner>
          <Link to={`/singUp`}>
            <ResetPassword style={{ margin: '0px', alignSelf: 'center' }}> Sing up</ResetPassword>
          </Link>
          <SignInButton type="submit">
            Sing in <Vector1 />
          </SignInButton>
        </SignUpInRowConteiner>
      </OurForm>
    </>
  );
};
export default SingIn;
