import React from 'react';

import { Container } from './styles';

const DownloadTable = ({ children }) => {
  return <Container> { children } </Container>
}

export default DownloadTable;

export const DownloadItem = ({ children }) => {
return <div className="documento">{children}</div>
}