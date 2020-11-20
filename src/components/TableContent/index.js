import React from 'react';

import { Container } from './styles';

function TableContent({ children }) {
  return (
      <Container className="table-content">
          {children}
      </Container>
  );
}

export default TableContent;