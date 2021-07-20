import React, { useState, useEffect } from 'react';
import TitlePage from '../../components/TitlePage';
import User from '../../components/User';
import ListEmployees from '../ListEmployees';
import TextField from '@material-ui/core/TextField';
import api from '../../services/api';

import { theme } from '../../global/theme';

import { Container2, Container3, Container4, Form, Container5, Button } from './styles';

export default function EditEmployee(props) {
  const [inputName, setInputName] = useState('');
  const [inputBornDate, setInputBornDate] = useState('');
  const [inputSalary, setInputSalary] = useState('');
  const [inputPosition, setInputPosition] = useState('');
  const [listPage, setListPage] = useState(false);

  const [salary, setSalary] = useState('');

  const id = props.id;

  useEffect(() => {
    async function getUsuario() {
      const response = await api.get(`/employees/${id}`);

      setInputName(response.data.name);
      setInputBornDate(response.data.bornDate);
      setInputSalary(response.data.salary);
      setInputPosition(response.data.position);
    }

    getUsuario();

  }, [])


  async function atualizar(e) {
    e.preventDefault();

    await api.put(`/employees/${id}`, {
      name: inputName,
      bornDate: inputBornDate,
      salary: salary,
      position: inputPosition,
      id: (Math.floor(Math.random() * 999999 + 100000))
    }).then(
      alert("Alteração realizada com sucesso!"),
      setListPage(true)
    )
  }

  useEffect(() => {
    let value = inputSalary.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    setInputSalary(value);
    setSalary(inputSalary);
  }, [inputSalary]);


  return (
    <>
      {listPage ? <ListEmployees /> :
        <Container2>
          <Container3>
            <TitlePage title={'Editar colaborador'} subtitle={'Faça as alterações necessárias no formulário abaixo:'} />
            <User />
          </Container3>

          <Container4>
            <Form onSubmit={atualizar}>
              <Container5>
                <TextField id="standard-basic" label="Nome:" color={theme.colors.darkGray} margin="dense" type='text' value={inputName} onChange={value => setInputName(value.target.value)} />
                <TextField id="standard-basic" label="Cargo:" color={theme.colors.darkGray} margin="dense" type='text' value={inputPosition} onChange={value => setInputPosition(value.target.value)} />

                <TextField id="standard-basic" label="Salário:" color={theme.colors.darkblue} margin="dense" type='tel' value={inputSalary} onChange={value => setInputSalary(value.target.value)} />
                <TextField id="standard-basic" InputLabelProps={{ shrink: true, }} label="Data de nascimento:" color={theme.colors.darkGray} margin="dense" type='date' value={inputBornDate} onChange={value => setInputBornDate(value.target.value)} />
              </Container5>
              <Button type="submit">
                ATUALIZAR
              </Button>
            </Form>
          </Container4>
        </Container2>
      }</>
  );
}