import styled from 'styled-components';
import { ReactComponent as logo } from './images/Logo.svg';
import { ReactComponent as bg } from './images/background.svg';
import { colors } from 'styles/theme';

export const Logo = styled(logo)`
  width: 120px;
  height: 52px;
  position: absolute;
  top: 36px;
  left: 35px;
`;
export const Background = styled(bg)`
  position: fixed;
`;
export const Container = styled.div`
  position: absolute;
  width: 500px;
  min-height: 300px;
  background-color: ${colors.grey3};
  left: calc(50% - 250px);
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
`;
