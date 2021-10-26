import styled from 'styled-components';
import { ReactComponent as vector } from './images/vector.svg';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as BackgroundImage } from './images/back.svg';

export const LogoImage = styled(Logo)`
  position: absolute;
  width: 120px;
  height: 52px;
  left: 35px;
  top: 35px;
`;

export const BackImage = styled(BackgroundImage)`
  position: absolute;
  width: 100%;
  height: auto;
`;

export const OurForm = styled.form`
  position: relative;
  flex-direction: column;
  padding: 30px;
  display: flex;
  width: 500px;
  left: 470px;
  top: 239px;
  background: #3a3a51;
`;

export const InputForm = styled.input`
position: relative;
padding: 16px;
display: flex;
width: 440px;
height: 56px;
margin-top: 20px;
background: #42425C
border: none;
`;

export const TextSignIn = styled.p`
  position: relative;
  margin-bottom: 20px;
  height: 36px;
  font-family: SF UI Text;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  color: #ffffff;
`;

export const ResetPassword = styled.button`
  position: relative;
  height: 24px;
  margin-top: 30px;
  font-family: SF UI Text;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background-color: transparent;
  border: none;
`;

export const SignUpInRowConteiner = styled.div`
position relative;
display: flex;
height: 40px;
margin-top: 60px;
`;

export const Vector1 = styled(vector)`
  width: 11.2px;
  height: 9px;
  margin-left: 20px;
`;

export const SignInButton = styled.button`
position relative;
display: flex;
width: 124px;
height: 40px;
background: #3A3A51;
border: 1px solid #A1A1B9;
box-sizing: border-box;
font-family: SF UI Text;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
margin-left: 253px;
align-items: center;
justify-content: center;
`;

export const TextEmail = styled.p`
position relative;
display: flex;
width: 334px;
height: 24px;
margin-top: 20px;
margin-bottom: 0px;
font-family: SF UI Text;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #A1A1B9;
`;
