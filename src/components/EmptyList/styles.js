import styled from 'styled-components';
import { theme } from '../../global/theme';

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
`;

export const Text = styled.p`
  color:${theme.colors.darkGray};
  font-size: 20px;
  width: 20%;
  text-align: center;
  margin-top: 1%;
`;