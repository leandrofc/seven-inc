import React, { useState, useEffect } from 'react';
import TitlePage from '../../components/TitlePage';
import User from '../../components/User';
import EmptyList from '../../components/EmptyList';
import EditEmployee from '../EditEmployee/index';

import NumberFormat from 'react-number-format';
import moment from 'moment';
import 'moment/locale/pt-br';

import foto from '../../assets/foto.jpg';
import { FiTrash2, FiEdit } from 'react-icons/fi'
import ReactLoading from 'react-loading';

import api from '../../services/api';

import TextField from '@material-ui/core/TextField';

import { theme } from '../../global/theme';

import { Container2, Container3, Container4, Button, Div, TableContainer, Image } from './styles';

export default function SearchEmployee() {
  const [employeeList, setEmployeeList] = useState([]);
  const [inputId, setInputId] = useState('');

  const [editPage, setEditPage] = useState(false);
  const [employeeEditId, setEmployeeEditId] = useState('');

  const [showEmployee, setShowEmployee] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);

  async function loadData() {
    const response = await api.get(`/employees/${inputId}`).then(response => {
      setEmployeeList(response.data);
      setShowEmpty(false)
      setShowEmployee(true);
    })
      .catch(
        setShowEmployee(false),
        setShowEmpty(true)
      )
  }

  async function buscar(e) {
    e.preventDefault();


    loadData();

    setInputId('');
  }

  async function handleDelete(id) {
    if (window.confirm("Deseja realmente excluir este usuário?")) {
      await api.delete('/employees/' + id);
      loadData();
    }
  }

  function handleEdit(id) {
    setEditPage(true);
    setEmployeeEditId(id);
  }

  return (
    <>
      {editPage ? <EditEmployee id={employeeEditId} /> :
        <Container2>
          <Container3>
            <TitlePage title={'Buscar colaborador'} subtitle={'Use o ID do colaborador para encontrá-lo'} />
            <User />
          </Container3>

          <Container4>
            <form onSubmit={buscar}>
              <TextField value={inputId} onChange={value => setInputId(value.target.value)} id="outlined-basic" label="Insira o ID do colaborador" variant="outlined" />
              <Button type="submit" disabled={!inputId}> Buscar</Button>
            </form>
          </Container4>

          {showEmployee === true &&
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Nome</th>
                    <th>Função</th>
                    <th>Salário</th>
                    <th>Nascimento</th>
                    <th>ID</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td><Image src={foto} /></td>
                    <td>{employeeList.name}</td>
                    <td >{employeeList.position}</td>
                    <td>R$ <NumberFormat value={employeeList.salary} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} fixedDecimalScale={true} decimalScale={2} /></td>
                    <td>{moment(employeeList.bornDate).format('DD/MM/YYYY')}</td>
                    <td>{employeeList.id}</td>
                    <td>
                      <Div onClick={() => handleEdit(employeeList.id)}>
                        <FiEdit size="20" color={theme.colors.lightBlue} />
                      </Div>
                    </td>
                    <td>
                      <Div onClick={() => handleDelete(employeeList.id)}>
                        <FiTrash2 size="20" color={theme.colors.lightRed} />
                      </Div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
          }
          {(showEmployee === false && showEmpty === true) && <EmptyList text="Não há colaborador com esse ID" />}
        </Container2 >
      }
    </>
  );
}