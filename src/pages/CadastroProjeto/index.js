import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContainerMain from '../../components/ContainerMain'
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar'
// import Table from '../../components/Table'
// import TableContent from '../../components/TableContent'

import { Container } from './styles';

const CadastroProjeto = () => {
  return(
    <Container>
    <ContainerMain>
        <Header isLogin={true} />
        <TreeBar>
            <li><Link to="/home">Tela Inicial</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><Link to="/cadastro-projeto">Cadastrar um projeto</Link></li>
        </TreeBar>
            
        <Main>
          
        </Main>
    
        <Footer />
    </ContainerMain>
</Container>
  );
}

export default CadastroProjeto;