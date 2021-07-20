import styled from 'styled-components';
import { theme } from '../../global/theme';

export const ContainerSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.darkblue};
  justify-content: space-between;
  width: 25%;
  height: 100vh;
`;

export const Container2SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 15%;
`;

export const Image = styled.img`
  width: 70%;
`;

export const Container3SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 55% 0;
  height:85vh;

`;

