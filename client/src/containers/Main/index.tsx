import React from 'react';
import Header from './Header';
import { MainContainer } from './styled';

export const Main: React.FC<any> = () => {
    return(
        <MainContainer>
            <Header />
        </MainContainer>
    )
};