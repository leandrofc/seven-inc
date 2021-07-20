import React, { useState, useEffect } from 'react';
import TitlePage from '../../components/TitlePage';
import User from '../../components/User';

import api from '../../services/api';

import TextField from '@material-ui/core/TextField';

import { theme } from '../../global/theme';

import { Container2, Container3, Container4, Form, Container5, Button } from './styles';

export default function AddEmployee() {

  const [inputName, setInputName] = useState('');
  const [inputBornDate, setInputBornDate] = useState('');
  const [inputSalary, setInputSalary] = useState('');
  const [inputPosition, setInputPosition] = useState('');

  const [salary, setSalary] = useState('');

  const [employeesList, setEmployeesList] = useState([]);

  useEffect(() => {

    async function loadData() {
      const response = await api.get('/employees');
      setEmployeesList(response.data);
    }

    loadData();
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post('/employees', {
      name: inputName,
      bornDate: inputBornDate,
      salary: salary,
      position: inputPosition,
      id: (Math.floor(Math.random() * 999999 + 100000))
    }).then(response => {
      const { success } = response.data;
      setInputName('');
      setInputBornDate('');
      setInputSalary('');
      setInputPosition('');
      //window.location.href = '/'
      alert("Usuário cadastrado com sucesso!");
    })
  }


  useEffect(() => {
    var value = inputSalary.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    setInputSalary(value);
    setSalary(inputSalary)
  }, [inputSalary]);


  return (
    <Container2>
      <Container3>
        <TitlePage title={'Adicionar colaborador'} subtitle={'Preencha o formulário abaixo:'} />
        <User />
      </Container3>

      <Container4>
        <Form onSubmit={handleSubmit}>
          <Container5>
            <TextField id="standard-basic" label="Nome:" color={theme.colors.darkGray} margin="dense" type='text' value={inputName} onChange={value => setInputName(value.target.value)} />
            <TextField id="standard-basic" label="Cargo:" color={theme.colors.darkGray} margin="dense" type='text' value={inputPosition} onChange={value => setInputPosition(value.target.value)} />

            <TextField id="standard-basic" label="Salário:" color={theme.colors.darkblue} margin="dense" type='tel' value={inputSalary} onChange={value => setInputSalary(value.target.value)} />
            <TextField id="standard-basic" InputLabelProps={{ shrink: true, }} label="Data de nascimento:" color={theme.colors.darkGray} margin="dense" type='date' value={inputBornDate} onChange={value => setInputBornDate(value.target.value)} />
          </Container5>
          <Button type='submit'>
            CADASTRAR
          </Button>
        </Form>
      </Container4>
    </Container2>
  );
}