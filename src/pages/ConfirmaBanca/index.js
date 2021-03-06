import React from 'react';
import { Link } from 'react-router-dom'
import { FiMapPin, FiClock, FiCalendar, FiBookmark, FiUsers  } from 'react-icons/fi'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContainerMain from '../../components/ContainerMain'
import DataTable, { DataRow, DataItem } from '../../components/DataTable'
import Form, { FormGroup } from '../../components/Form'
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar'
import Table from '../../components/Table'
import TableContent from '../../components/TableContent'
import Title from '../../components/Title'

import { Container } from './styles.js';

const ConfirmarBanca = () => {
  return (
    <Container>
      <ContainerMain>
        <Header isLogin={true} />
        <TreeBar>
          <li><Link to="/home">Tela Inicial</Link></li>
          <li><Link to="/confirmar-banca">Confirmar Solicitação de Banca</Link></li>
        </TreeBar>
        <Main>
          <Title>Confirmação de Solicitação de Banca</Title>
          <Table>
            <TableContent title="Banca Solicitada">
              <Form 
                hasConfirmation={true}
                hasCancelButton={true}
                messageCancelButton="Cancelar Banca"
                messageConfirmationButton="Aprovar Banca"
                >
                <FormGroup>
                  <label htmlFor="local">
                    <FiMapPin />
                    Local
                  </label>
                  <input 
                    name="local" 
                    placeholder="" 
                    type="text"
                    disabled
                    />
                </FormGroup>
                 <FormGroup>
                  <label htmlFor="data">
                    <FiCalendar />
                    Data
                  </label>
                  <input 
                    name="data" 
                    type="date"
                    disabled
                  />
                </FormGroup>
                 <FormGroup>
                  <label htmlFor="inicio">
                    <FiClock />
                    Horário de Início
                  </label>
                  <input 
                    name="inicio" 
                    placeholder="" 
                    type="text"
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                <label htmlFor="curso">
                    <FiUsers />
                    Curso
                  </label>
                  <select name="curso">
                    <option value="INF" selected disabled>INF</option>
                  </select>
                </FormGroup>
                  <FormGroup>
                  <label htmlFor="termino">
                    <FiClock />
                    Horário de Término
                  </label>
                  <input 
                    name="termino" 
                    placeholder="" 
                    type="text"
                    disabled
                  />
                </FormGroup>
                 <FormGroup>
                  <label htmlFor="nome">
                    <FiBookmark />
                    Projeto/Estágio
                  </label>
                  <input 
                    name="nome" 
                    placeholder="" 
                    type="text"
                    disabled
                  />
                </FormGroup>
              </Form>
            </TableContent>
          </Table>
          <Title>Participantes</Title>
          <DataTable 
            columns={["Nome","Matrícula","CPF","Grau Acadêmico","Função"]}
            isFullWidth = {true}
            isScrolled = {true}
          >
            <DataRow>
              <DataItem>Jonas Santos dos Sant0s</DataItem>
              <DataItem>2018325011</DataItem>
              <DataItem>763.201.482-09</DataItem>
              <DataItem>Ensino Médio</DataItem>
              <DataItem>Discente</DataItem>
            </DataRow>
          </DataTable>
        </Main>
        <Footer />
      </ContainerMain>
    </Container>

    )

}


export default ConfirmarBanca;