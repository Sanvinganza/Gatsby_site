import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

import { BodyContainer, BodyMain, MainPageContainer } from './styled';

const MainPage: React.FC = () => {
  return (
    <MainPageContainer>
      <Header />
      <BodyContainer>
        <Sidebar />
        <BodyMain></BodyMain>
      </BodyContainer>
    </MainPageContainer>
  );
};

export default MainPage;
