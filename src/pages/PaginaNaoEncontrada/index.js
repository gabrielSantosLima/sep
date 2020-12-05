import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ContainerMain from '../../components/ContainerMain'
import Main from '../../components/Main'

import { Container } from './styles';

const PaginaNaoEncontrada = () => {
  return(
    <Container>

      <ContainerMain>
        <Header />

        <Main>
          <h1>404</h1>
          <h2>Página Não Encontrada</h2>
          <h3>Isto é um erro</h3>
        </Main>
          
        <Footer />
      </ContainerMain>
    </Container>
  );
}

export default PaginaNaoEncontrada;