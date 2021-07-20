import React, { useState, useEffect } from 'react';

import TitlePage from '../../components/TitlePage';
import User from '../../components/User';
import EmptyList from '../../components/EmptyList';
import EditEmployee from '../EditEmployee/index';

import ReactLoading from 'react-loading';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import 'moment/locale/pt-br';

import foto from '../../assets/foto.jpg';
import maju from '../../assets/maju.jpg';
import { FiTrash2, FiEdit } from 'react-icons/fi'

import api from '../../services/api';

import { theme } from '../../global/theme';

import { Container2, Container3, TableContainer, Image, Div } from './styles';

export default function ListEmployees() {
  const [isLoading, setIsLoading] = useState(false);
  const [employeesList, setEmployeesList] = useState([]);
  const [editPage, setEditPage] = useState(false);
  const [employeeEditId, setEmployeeEditId] = useState('');
  const [showEmptyList, setShowEmptyList] = useState(false);

  useEffect(() => {
    loadData();
  }, [])

  async function loadData() {
    setIsLoading(true)
    const response = await api.get('/employees');
    setEmployeesList(response.data);
    { employeesList.length <= 0 && setShowEmptyList(true) }
    setIsLoading(false)
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
            <TitlePage title={'Colaboradores'} subtitle={`Total de colaboradores: ${employeesList.length} `} />
            <User />
          </Container3>

          {employeesList.length > 0 &&
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
                  {employeesList.map(employees => (
                    <tr key={employees.id} >
                      <td><Image src={foto} /></td>
                      <td>{employees.name}</td>
                      <td >{employees.position}</td>
                      <td>R$ <NumberFormat value={employees.salary} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} fixedDecimalScale={true} decimalScale={2} /></td>
                      <td>{moment(employees.bornDate).format('DD/MM/YYYY')}</td>
                      <td>{employees.id}</td>
                      <td>
                        <Div onClick={() => handleEdit(employees.id)}>
                          <FiEdit size="20" color={theme.colors.lightBlue} />
                        </Div>
                      </td>
                      <td>
                        <Div onClick={() => handleDelete(employees.id)}>
                          <FiTrash2 size="20" color={theme.colors.lightRed} />
                        </Div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableContainer>
          }

          {(employeesList.length <= 0 && isLoading === false && showEmptyList !== false) && <EmptyList text="Não há colaboradores cadastrados" />}
          {isLoading === true && <ReactLoading type="spin" />}
        </Container2>
      }
    </>
  );
}