import React from 'react';
import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ContainerMain from '../../components/ContainerMain'
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar';
import Table from '../../components/Table';
import TableContent from '../../components/TableContent';
import DataTable, { DataRow, DataItem } from '../../components/DataTable';
import FilterContainer, { FilterInput, FilterOutput } from '../../components/FilterContainer';
import Form, { FormGroup } from '../../components/Form';

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
            <Table>
              <TableContent title="Informações de cadastro">
                <Form>
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
                      Local
                    </label>
                    <input 
                      name="local"
                      placeholder="Digite o local de realização..."
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="coordenacao">
                      Coordenação
                    </label>
                    <button name="coordenacao">Pesquisar por Coordenadores</button>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="avaliadores">
                      Avaliadores
                    </label>
                    <button name="avaliadores">Pesquisar por Avaliadores</button>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="estagio">
                      Estágio / PCCT
                    </label>
                    <button name="estagio">Pesquisar por Estágios ou Projetos</button>
                  </FormGroup>
                </Form>  
              </TableContent>
            </Table>
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