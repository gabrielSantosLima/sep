import React from 'react';

import { Container } from './styles';

const TreeBar = ( { children }) => {
  return (
    <Container className="tree-bar">
      {children}
    </Container>
  );
}

export default TreeBar;