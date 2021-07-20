import React, { useState } from 'react';
import ListEmployees from '../ListEmployees';
import AddEmployee from '../AddEmployee';
import SearchEmployee from '../SearchEmployee';
import Logo from '../../assets/logo.png';

import Option from '../../components/Option';

import { theme } from '../../global/theme';


import { SideBar, Container2SideBar, Image, Container3SideBar, Container, Container2, Container3 } from './styles';

export default function Home() {

  const [pagina, setPagina] = useState('listar');

  return (
    <Container>

      <SideBar>
        <Container2SideBar>
          <Image src={Logo} />
        </Container2SideBar>
        <Container3SideBar>
          <div onClick={() => setPagina('listar')}>
            <Option
              color={pagina === 'listar' ? theme.colors.white : theme.colors.mediumBlue}
              icon={'listar'}
              text={'Listar'}
            />
          </div>
          <div onClick={() => setPagina('adicionar')}>
            <Option
              color={pagina === 'adicionar' ? theme.colors.white : theme.colors.mediumBlue}
              icon={'adicionar'}
              text={'Adicionar'}
            />
          </div>
          <div onClick={() => setPagina('pesquisar')}>
            <Option
              color={pagina === 'pesquisar' ? theme.colors.white : theme.colors.mediumBlue}
              icon={'buscar'}
              text={'Buscar'}
            />
          </div>
        </Container3SideBar>
      </SideBar>

      <Container2>
        <Container3>
          {pagina === 'listar' && <ListEmployees />}
          {pagina === 'adicionar' && <AddEmployee />}
          {pagina === 'pesquisar' && <SearchEmployee />}
        </Container3>
      </Container2>
    </Container>
  );
}