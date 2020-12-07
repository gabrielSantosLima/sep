import React from 'react';

import { Container } from './styles';

const DataTable = ({ 
  columns, 
  children,
  hasHover = false,
  isFullWidth = false,
  isScrolled = false, 
  hasBorder = true 
}) => {
  
  function renderColumns(column){
    const indexOf = columns.indexOf(column)
    return(
      <th key={indexOf}>{column}</th>
    )
  }

  if(!columns) return <span>Sem campos registrados</span>
  
  return(
      <Container 
        isFullWidth={isFullWidth} 
        isScrolled={isScrolled}
        hasBorder={hasBorder}
        hasHover={hasHover}
      >
        <thead>  
          <DataRow>
            { columns.map(renderColumns) }
          </DataRow>
        </thead>
        <tbody>
          {children}
        </tbody>
      </Container>
  );
}

export default DataTable;

export const DataRow = ({ children, onClick })=>{
  return <tr onClick={onClick}>{children}</tr>
}

export const DataItem = ({ children })=>{
  return <td>{children}</td>
}
