import styled from 'styled-components';
import { theme } from '../../global/theme';

export const Container2 = styled.div`
  width: 100%;
  background-color: ${theme.colors.lightGray};
  display: flex;
  flex-direction:column;
`;

export const Container3 = styled.div`
  display:flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Container4 = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 5%;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
`;

export const Container5 = styled.div`
display: flex;
justify-content:space-between;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  width:100%;
  padding: 5%;
`;

export const Button = styled.button`
  background-color: ${theme.colors.darkblue};
  color: ${theme.colors.white};
  border-radius: 5px;
  padding: 16px;
  margin-top: 5%;
  width: 20%;
`;