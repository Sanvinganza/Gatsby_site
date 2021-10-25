import styled from 'styled-components';
import { colors } from 'styles/theme';

export const Container = styled.div`
  position: absolute;
  width: 500px;
  min-height: 300px;
  background-color: ${colors.grey3};
  left: calc(50% - 250px);
`;
