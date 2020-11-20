import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContainerMain from '../../components/ContainerMain'
import ParticipantsContainer from '../../components/ParticipantsContainer'
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar'
import Table from '../../components/Table'
import TableContent from '../../components/TableContent'

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
          <Table>
            <TableContent title="Geral">Geral</TableContent>
            <TableContent title="Discente">Discente</TableContent>
            <TableContent title="Docente">Docente</TableContent>
            <TableContent title="Externo">Externo </TableContent>
          </Table>
          <ParticipantsContainer>

          </ParticipantsContainer>
        </Main>
        <Footer />
    </ContainerMain>
</Container>
  );
}

export default CadastroProjeto;