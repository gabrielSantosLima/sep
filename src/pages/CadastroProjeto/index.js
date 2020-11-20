import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContainerMain from '../../components/ContainerMain'
import DataTable, { DataRow, DataItem } from '../../components/DataTable'
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar'
import Table from '../../components/Table'
import TableContent from '../../components/TableContent'

import { Container } from './styles';
import { FiTrash2 } from 'react-icons/fi'; // ícone da lixeira

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
              
            <DataTable 
              fields={["Nome","Matrícula","CPF","Grau Acadêmico","Função"]}
            >
              <DataRow>
                <DataItem>Gabriel Lima</DataItem>
                <DataItem>2018324100</DataItem>
                <DataItem>XXX.XXX.XXX-XX</DataItem>
                <DataItem>Ensino Médio</DataItem>
                <DataItem>Discente</DataItem>
                <DataItem><FiTrash2 /></DataItem>
              </DataRow>
              <DataRow>
                <DataItem>Melinne Diniz</DataItem>
                <DataItem>2018314100</DataItem>
                <DataItem>XXX.XXX.XXX-XX</DataItem>
                <DataItem>Mestre</DataItem>
                <DataItem>Doscente</DataItem>
                <DataItem><FiTrash2 /></DataItem>
              </DataRow>
            </DataTable>
          </Main>
          <Footer />
      </ContainerMain>
  </Container>
  );
}

export default CadastroProjeto;