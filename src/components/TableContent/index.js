import React from 'react';

import { Container } from './styles';

function TableContent({ children }) {
  return (
      <Container>
          {children}
      </Container>
  );
}

export default TableContent;