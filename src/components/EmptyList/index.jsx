import React from 'react';

import { FiAlertCircle } from 'react-icons/fi'

import { theme } from '../../global/theme';

import { Container2, Text } from './styles';

export default function EmptyList({ text }) {
  return (
    <Container2>
      <FiAlertCircle size="40" color={theme.colors.lightRed} />
      <Text>
        {text}
      </Text>
    </Container2 >
  );
}