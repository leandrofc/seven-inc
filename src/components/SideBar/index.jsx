import Logo from '../../assets/logo.png';

import Option from '../Option';
import { theme } from '../../global/theme';


import { ContainerSideBar, Container2SideBar, Image, Container3SideBar } from './styles';

export default function SideBar() {
  return (
    <ContainerSideBar>
      <Container2SideBar>
        <Image src={Logo} />
      </Container2SideBar>
      <Container3SideBar>
        <Option color={theme.colors.white} icon={'listar'} text={'Listar'} />
        <Option color={theme.colors.mediumBlue} icon={'adicionar'} text={'Adicionar'} />
        <Option color={theme.colors.mediumBlue} icon={'buscar'} text={'Buscar'} />
      </Container3SideBar>
    </ContainerSideBar>
  );
}