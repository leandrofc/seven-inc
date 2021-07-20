import React from 'react';

import { Container, Title, Subtitle } from './styles';

export default function TitlePage({ title, subtitle }) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  );
}