import React from 'react';

import { Container } from './styles';

const ContainerMain = ({ children }) => {
  return (
    <Container className="container-main">
      {children}
    </Container>
  );
}

export default ContainerMain;