import React from 'react';
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ContainerMain from '../../components/ContainerMain'
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar';

import { Container } from './styles';

const Perfil = () => {
  return(
    <Container>

      <ContainerMain>
        <Header isLogin={true} />
        <TreeBar>
          <li><Link to="/home">Tela Inicial</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
        </TreeBar>
          
        <Main>
          <h1>Falta fazer</h1>
        </Main>
          
        <Footer />
      </ContainerMain>
    </Container>
  );
}

export default Perfil;