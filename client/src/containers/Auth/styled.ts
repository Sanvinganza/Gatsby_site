import styled from 'styled-components';
import bgImage from '../../assets/images/bg.png';
import Arrow from '../../assets/images/arrow_right.svg';
import Logo from '../../assets/images/logo.svg';

export const AuthWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: no-repeat url(${bgImage});
  background-size: cover;
`;

export const AuthLogo = styled.div`
  position: absolute;
  left: 36px;
  top: 36px;
  width: 120px;
  height: 52px;
  background: no-repeat url(${Logo});
`;

export const AuthFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  top: 240px;
  left: 470px;
  position: absolute;
  background: #3a3a51;
  padding: 30px;
`;

export const AuthInput = styled.input`
  color: #ffffff;
  margin-bottom: 20px;
  padding: 16px;
  border: 0px;
  width: 440px;
  height: 56px;
  background: #42425c;
  ::placeholder {
    font-family: SF UI Text;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #a1a1b9;
  }
`;

export const AuthFormTitle = styled.div`
  margin-bottom: 40px;
  font-family: SF UI Text;
  font-style: normal;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  color: #ffffff;
`;

export const AuthTextStyle = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  font-family: SF UI Text;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const AuthTextGray = styled.div`
  margin-bottom: 20px;
  font-family: SF UI Text;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #a1a1b9;
`;

export const AuthSignUpSignIn = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthButton = styled.button`
  background: #3a3a51;
  border: 1px solid #a1a1b9;
  width: 124px;
  height: 40px;
  cursor: pointer;
  padding: 8px 18px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const AuthButtonArrow = styled.div`
  background: no-repeat url(${Arrow});
  width: 12px;
  height: 12px;
`;
