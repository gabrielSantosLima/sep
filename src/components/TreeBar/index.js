import React from 'react';

import { Container } from './styles';

const TreeBar = ( { children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default TreeBar;