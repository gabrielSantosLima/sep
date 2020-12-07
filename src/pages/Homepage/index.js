import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ContainerMain from '../../components/ContainerMain'
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar';
import Table from '../../components/Table';
import TableContent from '../../components/TableContent';
import DataTable, { DataItem, DataRow } from '../../components/DataTable';

import { Container, Left, Right, UserIcon, ButtonList, ButtonConfirm } from './styles';

const Homepage = () => {
  const history = useHistory()

  function handleCadastrarEstagio(){
    history.push("/cadastro-estagio")
  }
  
  function handleCadastrarProjeto(){
    history.push("/cadastro-projeto")
  }
  
  function handleDescricaoEstagio(){
    history.push("/descricao-estagio")
  }
  
  function handleDescricaoProjeto(){
    history.push("/descricao-projeto")
  }
  
  function handleConfirmarBanca(){
    history.push("/confirmar-banca")
  }

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
                <ButtonList>
                  <li><ButtonConfirm onClick={handleCadastrarEstagio}>Adicionar Novo Estágio</ButtonConfirm></li>
                </ButtonList>
                <DataTable 
                  columns={["Título", "Curso", "Concluído", "Carga Horária", "Turno", "Responsável",""]}
                  isFullWidth={true}
                  isScrolled={true}
                  hasBorder={false}
                  hasHover={true}
                >
                  <DataRow onClick={handleDescricaoEstagio}>
                    <DataItem>Título</DataItem>
                    <DataItem>Curso</DataItem>
                    <DataItem>Não</DataItem>
                    <DataItem>CH</DataItem>
                    <DataItem>Integrado</DataItem>
                    <DataItem>Gabriel Dos Santos Lima</DataItem>
                    <DataItem><FiChevronRight size={20} /></DataItem>
                  </DataRow>
                </DataTable>
              </TableContent>
              <TableContent title="Projetos">
                <ButtonList>
                  <li><ButtonConfirm onClick={handleCadastrarProjeto}>Adicionar Novo Projeto</ButtonConfirm></li>
                </ButtonList>
                <DataTable 
                  columns={["Título", "Curso", "Concluído", "Carga Horária", "Turno", "Responsável",""]}
                  isFullWidth={true}
                  isScrolled={true}
                  hasBorder={false}
                  hasHover={true}
                >
                  <DataRow onClick={handleDescricaoProjeto}>
                    <DataItem>Título</DataItem>
                    <DataItem>Curso</DataItem>
                    <DataItem>Sim</DataItem>
                    <DataItem>CH</DataItem>
                    <DataItem>Integrado</DataItem>
                    <DataItem>Gabriel Dos Santos Lima</DataItem>
                    <DataItem><FiChevronRight size={20}/></DataItem>
                  </DataRow>
                </DataTable>
              </TableContent>
            </Table>
            <Table>
              <TableContent title="Bancas Solicitadas">
                <DataTable 
                  columns={["Data de Notificação", 
                  "Local", 
                  "Data da apresentação", 
                  "Hora",
                  ""
                ]}
                  isFullWidth={true}
                  isScrolled={true}
                  hasBorder={false}
                  hasHover={true}
                >
                  <DataRow onClick={handleConfirmarBanca}>
                    <DataItem>Título</DataItem>
                    <DataItem>Curso</DataItem>
                    <DataItem>Sim</DataItem>
                    <DataItem>CH</DataItem>
                    <DataItem><FiChevronRight size={20}/></DataItem>
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