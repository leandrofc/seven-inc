import styled from 'styled-components';
import { theme } from '../../global/theme';

export const Container = styled.div`
  display: flex;
`;

export const Container2 = styled.div`
  width: 100%;
  background-color: ${theme.colors.lightGray};
  flex-direction:column;
`;

export const Container3 = styled.div`
  display:flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Container4 = styled.div`
  margin-left:5%;
  //background-color:${theme.colors.white};
  width: 30%;
`;

export const Button = styled.button`
  text-align: center;
  padding: 6%;
  background-color: ${theme.colors.darkblue};
  color:${theme.colors.white};
  margin-left: 3%;
  border-radius: 5px;
  border: none;
  
`;


export const TableContainer = styled.section`
  margin:5%;
  table {
    width: 100%;
    border-spacing: 0 16px;
    th {
      color: ${theme.colors.darkGray};
      font-weight: normal;
      padding: 14px;
      padding-bottom: 0;
      text-align: left;
      font-size: 14px;
      line-height: 24px;
    }
    td {
      padding: 14px;
      border: 0;
      background: ${theme.colors.white};
      font-size: 14px;
      font-weight: normal;
      color: ${theme.colors.darkblue};
    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

export const Div = styled.div`
  cursor: pointer;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 40px;
  margin-left:15px;
`;