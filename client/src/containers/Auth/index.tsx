import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import { AuthWrapper, AuthLogo } from './styled';

interface IAuthProps {
  name: string;
}

// const Auth: React.FC<IAuthProps> = () => {
const Auth: React.FC = () => {
  return (
    <AuthWrapper>
      <AuthLogo />
      <ResetPassword />
      {/* <SignUp /> */}
      {/* <SignIn /> */}
    </AuthWrapper>

    // <div>Auth Page</div>
  );
};

export default Auth;
