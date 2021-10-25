import React from 'react';
import { Background, Logo } from './styled';

interface IAuthProps {
  name: string;
}

const Auth: React.FC<IAuthProps> = () => {
  return (
    <>
      <Background />
      <Logo />
    </>
  );
};

export default Auth;
