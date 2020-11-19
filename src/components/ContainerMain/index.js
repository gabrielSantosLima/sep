import React from 'react';

import { Container } from './styles';

const ContainerMain = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default ContainerMain;