import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

import { BodyContainer, BodyMain } from './styled';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <BodyContainer>
        <Sidebar />
        <BodyMain>Content</BodyMain>
      </BodyContainer>
    </>
  );
};

export default MainPage;
