import styled from 'styled-components';
import { theme } from '../../global/theme';

export const Container = styled.div`
  width: 12%;
  height: 5%;
  display: flex;
  background-color: ${theme.colors.mediumGray};
  border-radius: 5px;
  margin-right: 5%;
  padding: 6px 12px;
  justify-content: space-between;
  align-items:center;
  color:${theme.colors.darkblue};
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 25px;
`;

export const Text = styled.p`
    font-size: 14px;
`;
