import React from 'react';

import { Container } from './styles';

const DataTable = ({ fields, children }) => {

  function renderFields(field){
    const indexOf = fields.indexOf(field)
    return(
      <th key={indexOf}>{field}</th>
    )
  }

  if(!fields) return <span>Sem campos registrados</span>

  return(
      <Container>
        <thead>  
          <tr>
            { fields.map(renderFields) }
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </Container>
  );
}

export default DataTable;

export const DataRow = ({ children })=>{
  return <tr>{children}</tr>
}

export const DataItem = ({ children })=>{
  return <td>{children}</td>
}
