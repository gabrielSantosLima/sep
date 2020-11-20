import React from 'react';
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar';
import Table from '../../components/Table'
import TableContent from '../../components/TableContent'
import ContainerMain from '../../components/ContainerMain'

import { Container } from './styles';

const Homepage = () => {

  return (
    <Container>

      <ContainerMain>
        <Header isLogin={true} />
        <TreeBar>
          <li><Link to="/home">Tela Inicial</Link></li>
        </TreeBar>
          
        <Main>  
          <Table>ntent title="">
          </Table>
        </Main>

        <Footer />
      </ContainerMain>
    </Container>
  );
}

export default Homepage;