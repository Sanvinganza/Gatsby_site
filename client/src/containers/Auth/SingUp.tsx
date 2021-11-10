import * as React from 'react';
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom';
import { signUpValidationSchema } from './validations';
import { fieldNames } from './enumerations';
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
import { CREATE_USERS, GET_USERS, CHECK_USERS } from './gql';
import { useLazyQuery, useMutation, useQuery } from 'react-apollo';

const SingUp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: signUpValidationSchema,
  });
  const [createUsers, { loading }] = useMutation(CREATE_USERS, {
    refetchQueries: [{ query: GET_USERS }],
  });

  React.useEffect(() => {
    register({ name: fieldNames.Name });
  });

  const [checkUsers, { data }] = useLazyQuery(CHECK_USERS, {});

  const onSubmit = handleSubmit(e => {
    checkUsers({
      variables: {
        email: e.email,
      },
    });
  });
  if (typeof data === 'object') {
    if (data.checkUsersById.length === 0) {
      handleSubmit(e => {
        createUsers({
          variables: {
            username: e.Name,
            email: e.email,
            password: e.password,
          },
        });
      });
      window.location.assign('http://localhost:3000/Todos');
    } else console.log('bad email');
  }

  return (
    <>
      <BackImage />
      <LogoImage />
      <OurForm onSubmit={onSubmit}>
        <TextSignIn>Sing up</TextSignIn>

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
            Sing up <Vector1 />
          </SignInButton>
        </SignUpInRowConteiner>
      </OurForm>
    </>
  );
};
export default SingUp;
