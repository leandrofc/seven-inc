//import foto from '../../assets/foto.jpg';
import pedro from '../../assets/pedro.jpg';

import { FiChevronDown } from 'react-icons/fi';
import { Container, Image, Text } from './styles';
import { theme } from '../../global/theme';

export default function User() {
  return (
    <Container>
      <Image src={pedro} />
      <Text>
        Pedro
      </Text>
      <FiChevronDown color={theme.colors.darkblue} />
    </Container>
  );
}