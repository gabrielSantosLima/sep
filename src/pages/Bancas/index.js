import React from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TreeBar from '../../components/TreeBar'
import ContainerMain from '../../components/ContainerMain'
import Main from '../../components/Main'
import DataTable, {DataRow, DataItem } from '../../components/DataTable'

import { Container } from './styles'


const Bancas = ()=> {
    return (
      <Container>
        <ContainerMain>
          <Header isLogin={true}/>
          <TreeBar>
            <li><Link to="/home">Tela Inicial</Link></li>
            <li><Link to="/bancas">Bancas</Link></li>
          </TreeBar>
          <Main>
            <DataTable 
              columns={[
                "Data", 
                "Horário", 
                "Local", 
                "Data de Finalização", 
                "Horário de Finalização", 
                "Participantes", 
                "Concluída", 
                ""
            ]}
              isFullWidth={true}
              isScrolled={true}
            >
              <DataRow>
                <DataItem>12/01/2021</DataItem>
                <DataItem>12:45</DataItem>
                <DataItem>Auditório Principal</DataItem>
                <DataItem>12/01/2021</DataItem>
                <DataItem>15:00</DataItem>
                <DataItem>
                  <ul>
                    <li>Gabriel Dos Santos Lima</li>
                    <li>Minnie Dos Santos Lima</li>
                    <li>Jurema Dos Santos Lima</li>
                  </ul>
                </DataItem>
                <DataItem>Não</DataItem>
                <DataItem><FiTrash2 /></DataItem>
              </DataRow>
            </DataTable>
          </Main>
          <Footer />
        </ContainerMain>
      </Container>
    )
}

export default Bancas