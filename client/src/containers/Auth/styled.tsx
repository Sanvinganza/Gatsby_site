import styled from 'styled-components';
import { ReactComponent as logo } from './images/Logo.svg';
import { ReactComponent as bg } from './images/background.svg';
import { colors } from 'styles/theme';
import { Link } from 'react-router-dom';

export const Logo = styled(logo)`
  width: 120px;
  height: 52px;
  position: absolute;
  top: 36px;
  left: 35px;
`;
export const Background = styled(bg)`
  position: fixed;
  z-index: -1;
`;
export const Container = styled.div`
  position: absolute;
  width: 500px;
  min-height: 300px;
  background-color: ${colors.grey4};
  left: calc(50% - 250px);
  top: calc(50% - 300px);
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
export const Title = styled.div`
  font-family: SF UI Text;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  padding-bottom: 30px;
`;
export const InputStyle = {
  padding: '16px',
  margin: '10px 0',
  backgroundColor: colors.grey3,
  color: colors.grey5,
  border: 0,
} as React.CSSProperties;
export const SignLink = styled(Link)`
  font-family: SF UI  Text;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;
export const ResetPasswordStyle = {
  alignSelf: 'flex-end',  
} as React.CSSProperties;
export const SignForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 60px;
`;
export const SignUpStyle = {
  
} as React.CSSProperties;
export const SignInStyle = {
  boxSizing: 'border-box',
  width: '125px',
  border: `1px solid ${colors.grey5}`,
  padding: '8px 0px 8px 20px',
  display: 'flex',
  justifyContent: 'space-between',
} as React.CSSProperties;