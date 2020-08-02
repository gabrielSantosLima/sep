import React from 'react';

import { Container } from './styles';
import Button from './../../components/Button/styles';

const ProjetoDescricao = () => {
  return (
    <Container>
      
      <Button 
        width={10} 
        bkColor="transparent" 
        height={5} 
        color="white"
      >
        Home
      </Button>

      <h1>Descrição de um projeto</h1>
    </Container>
  );
}

export default ProjetoDescricao;