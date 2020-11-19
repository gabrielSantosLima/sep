import React from 'react';

import { Container } from './styles';

const Main = ({ children }) => {
  return (
    <Container>
        {children}
    </Container>
  );
}

export default Main;