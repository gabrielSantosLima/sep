import React from 'react';
import { Link } from 'react-router-dom'
import { FiBold, FiMapPin, FiTrash2, FiUsers } from 'react-icons/fi'
import { MdAssignmentInd } from 'react-icons/md';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ContainerMain from '../../components/ContainerMain'
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar';
import Table from '../../components/Table';
import TableContent from '../../components/TableContent';
import DataTable, { DataRow, DataItem } from '../../components/DataTable';
import Form, { FormGroup } from '../../components/Form';
import Title from '../../components/Title';

import { Container } from './styles';

const CadastroBanca = () => {
  return(
    <Container>
      <ContainerMain>
        <Header isLogin={true} />
        <TreeBar>
            <li><Link to="/home">Tela Inicial</Link></li>
            <li><Link to="/bancas">Bancas</Link></li>
            <li><Link to="/cadastro-banca">Cadastro de Banca</Link></li>
        </TreeBar>
        <Main>
          <Title>Cadastrar Banca</Title>
          <Table>
            <TableContent title="Geral">
              <Form callback={() => console.log("Cadastrado")}>
                <FormGroup>
                  <label htmlFor="data">
                    Data de realização
                  </label>
                  <input 
                    name="data"  
                    type="date"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="horaInicio">
                    Horário de início
                  </label>
                  <input 
                    name="horaInicio"
                    type="time"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="horaFim">
                    Horário de finalização
                  </label>
                  <input 
                    name="horaFim"
                    type="time"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="local">
                    <FiMapPin />
                    Local
                  </label>
                  <input 
                    name="local"
                    placeholder="Digite o local de realização..."
                    type="text"
                  />
                </FormGroup>
              </Form>  
            </TableContent>
            <TableContent title="Coordenadora">
              <Form callback={() => console.log("Cadastrado")} hasConfirmation={false}>
                <FormGroup>
                  <label htmlFor="matricula">
                    <MdAssignmentInd />
                    Matrícula
                  </label>
                  <input type="text" placeholder="Digite a matrícula..."/>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="nome">
                    <FiBold />
                    Nome
                  </label>
                  <input type="text" placeholder="Digite o nome..."/>
                </FormGroup>
              </Form>  
            </TableContent>
            <TableContent title="Avaliadores">
              <Form callback={() => console.log("Cadastrado")} hasConfirmation={false}>
                <FormGroup>
                  <label htmlFor="matricula">
                    <MdAssignmentInd />
                    Matrícula
                  </label>
                  <input type="text" placeholder="Digite a matrícula..."/>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="nome">
                    <FiBold />
                    Nome
                  </label>
                  <input type="text" placeholder="Digite o nome..."/>
                </FormGroup>
              </Form>  
            </TableContent>
            <TableContent title="Estágio / PCCT">
              <Form callback={() => console.log("Cadastrado")} hasConfirmation={false}>
                <FormGroup>
                  <label htmlFor="titulo">
                    <FiBold />
                    Título
                  </label>
                  <input 
                    name="titulo"  
                    type="text"
                    placeholder="Digite o título..."
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="curso">
                    <FiUsers />
                    Curso
                  </label>
                  <select name="curso">
                    <option value="INF" selected >INF</option> 
                    <option value="IQUI" >IQUI</option>
                    <option value="IQUI">IMEC</option>
                    <option value="IEDF">IEDF</option>
                    <option value="IELT">IELT</option>
                  </select>
                </FormGroup>
              </Form>  
            </TableContent>
          </Table>
          <Title>Participantes</Title>
          <DataTable 
            columns={["Nome","Matrícula","CPF","Grau Acadêmico","Função", ""]}
            isFullWidth = {true}
            isScrolled = {true}
          >
            <DataRow>
              <DataItem>Gabriel Lima</DataItem>
              <DataItem>2018324100</DataItem>
              <DataItem>XXX.XXX.XXX-XX</DataItem>
              <DataItem>Ensino Médio</DataItem>
              <DataItem>Discente</DataItem>
              <DataItem><FiTrash2 /></DataItem>
            </DataRow>
          </DataTable>
        </Main>
        <Footer />
      </ContainerMain>
    </Container>
  );
}

export default CadastroBanca;