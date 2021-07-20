import React from 'react';

import {
  FiUserPlus,
  FiUsers,
  FiSearch
} from 'react-icons/fi';

import { Container, Text } from './styles';

export default function Option({ color, icon, text }) {
  return (
    <Container>
      {icon === 'listar' && <FiUsers color={color} size={30} />}
      {icon === 'adicionar' && <FiUserPlus color={color} size={30} />}
      {icon === 'buscar' && <FiSearch color={color} size={30} />}
      <Text style={{ color: color }}>
        {text}
      </Text>
    </Container>
  );
}