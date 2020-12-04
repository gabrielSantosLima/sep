import React from 'react';
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ContainerMain from '../../components/ContainerMain'
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar';
import Table from '../../components/Table';
import TableContent from '../../components/TableContent';
import DataTable, { DataItem, DataRow } from '../../components/DataTable';

import { Container, Left, Right, UserIcon } from './styles';

const Homepage = () => {

  return (
    <Container>
      <ContainerMain>
        <Header isLogin={true} />
        <TreeBar>
          <li><Link to="/home">Tela Inicial</Link></li>
        </TreeBar>
        <Main>
          <Left>
            <Table>
              <TableContent title="Estágios">
                <DataTable 
                  columns={["Título", "Curso", "Concluído", "Carga Horária"]}
                  isFullWidth={true}
                  isScrolled={true}
                  hasBorder={false}
                >
                  <DataRow>
                    <DataItem>Título</DataItem>
                    <DataItem>Curso</DataItem>
                    <DataItem>Não</DataItem>
                    <DataItem>CH</DataItem>
                  </DataRow>
                </DataTable>
              </TableContent>
              <TableContent title="Projetos">
                <DataTable 
                  columns={["Título", "Curso", "Concluído", "Carga Horária"]}
                  isFullWidth={true}
                  isScrolled={true}
                  hasBorder={false}
                >
                  <DataRow>
                    <DataItem>Título</DataItem>
                    <DataItem>Curso</DataItem>
                    <DataItem>Sim</DataItem>
                    <DataItem>CH</DataItem>
                  </DataRow>
                </DataTable>
              </TableContent>
            </Table>
            <Table>
              <TableContent title="Bancas Adicionadas">
                <DataTable 
                  columns={["Data de Notificação", 
                  "Local", 
                  "Data da apresentação", 
                  "Hora"
                ]}
                  isFullWidth={true}
                  isScrolled={true}
                  hasBorder={false}
                >
                  <DataRow>
                    <DataItem>Título</DataItem>
                    <DataItem>Curso</DataItem>
                    <DataItem>Sim</DataItem>
                    <DataItem>CH</DataItem>
                  </DataRow>
                </DataTable>
              </TableContent>
            </Table>
          </Left>
          <Right>
            <ul>
              <li><UserIcon letter="GA"/></li>
              <li>
                <label>Nome: </label>
                <span>Gabriel Dos Santos Lima</span>
              </li>
              <li>
                <label>Turma: </label>
                <span>IINF31B</span>
              </li>
              <li>
                <label>Curso: </label>
                <span>Informática</span>
              </li>
              <li>
                <label>CPF: </label>
                <span>XXX.XXX.XXX-XX</span>
              </li>
              <li>
                <label>Matrícula: </label>
                <span>2018324100</span>
              </li>
              <li>
                <label>Modalidade: </label>
                <span>Integrado</span>
              </li>
            </ul>
          </Right>
        </Main>
        <Footer />
      </ContainerMain>
    </Container>
  );
}

export default Homepage;