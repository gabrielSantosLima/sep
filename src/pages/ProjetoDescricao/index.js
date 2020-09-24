import React from 'react';

import { Container } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TreeBar from '../../components/TreeBar';

const ProjetoDescricao = () => {
  return (
    <Container>
      <Header isLogin/>
      <TreeBar>
        <li>Tela Inicial</li>
        <li>Projetos</li>
      </TreeBar>

      <Footer />
    </Container>
  );
}

export default ProjetoDescricao;