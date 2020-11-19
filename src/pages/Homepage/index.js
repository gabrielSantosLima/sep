import React from 'react';
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TreeBar from '../../components/TreeBar';
import Table from '../../components/Table'
import TableContent from '../../components/TableContent'

import { Container, Main } from './styles';

const Homepage = () => {

  return (
    <Container>
      <Header isLogin={true} />
      <TreeBar>
        <li><Link to="/home">Tela Inicial</Link></li>
      </TreeBar>
        
      <Main>  
        <Table>
          <TableContent title="Descrição">
          Alguma coisa 
          </TableContent>
        </Table>
      </Main>

      <Footer />
    </Container>
  );
}

export default Homepage;