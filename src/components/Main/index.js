import React from 'react';

import { Container } from './styles';

const Main = ({ children }) => {
  return (
    <Container className="main">
        {children}
    </Container>
  );
}

export default Main;