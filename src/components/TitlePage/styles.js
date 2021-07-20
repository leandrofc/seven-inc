import styled from 'styled-components';
import { theme } from '../../global/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 5%;
`;

export const Title = styled.p`
  color: ${theme.colors.darkblue};
  font-family: 'Roboto';
  font-size: 35px;
`;

export const Subtitle = styled.p`
  color: ${theme.colors.darkGray};
  font-family: 'Roboto';
  font-size: 14px;
`;
