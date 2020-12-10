import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import { useFetch } from './../../services/useFetch'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TreeBar from '../../components/TreeBar'
import ContainerMain from '../../components/ContainerMain'
import Main from '../../components/Main'
import DataTable, {DataRow, DataItem } from '../../components/DataTable'
import Table from '../../components/Table'
import TableContent from '../../components/TableContent'
import Title from '../../components/Title'

import { Container, ButtonConfirm, ButtonList } from './styles'
import Loading from '../../components/Loading'


const Bancas = ()=> {
  const history = useHistory()
  const { data: bancas } = useFetch('/bancas?curso=INF')

  if(!bancas) return <Loading />

  function handleSolicitarBanca(){
    history.push("/cadastro-banca")
  }
  
  function handleDescricaoBanca(id){
    history.push(`/descricao-banca/${id}`)
  }

  return (
    <Container>
      <ContainerMain>
        <Header isLogin={true}/>
        <TreeBar>
          <li><Link to="/home">Tela Inicial</Link></li>
          <li><Link to="/bancas">Bancas</Link></li>
        </TreeBar>
        <Title>Bancas</Title>
        <Main>
          <ButtonList>
            <li>
            <ButtonConfirm 
              onClick={handleSolicitarBanca}
            >
              Solicitar Nova Banca
            </ButtonConfirm>
            </li>
          </ButtonList>
          <Table>
            <TableContent title="Bancas">
              <DataTable 
                columns={[
                  "Data", 
                  "Local", 
                  "Horário de Início", 
                  "Horário de Finalização", 
                  "Concluída", 
                  "Coordenação", 
                  ""
              ]}
                isFullWidth={true}
                isScrolled={true}
                hasHover={true}
                hasBorder={false}
              > 
              {bancas.map(banca => (
                <DataRow key={banca.id} onClick={() => handleDescricaoBanca(banca.id)} >
                  <DataItem>{new Date(banca.data).toLocaleDateString()}</DataItem>
                  <DataItem>{banca.local}</DataItem>
                  <DataItem>{new Date(banca.horaInicio).toLocaleTimeString()}</DataItem>
                  <DataItem>{new Date(banca.horaFinalizado).toLocaleTimeString()}</DataItem>
                  <DataItem>{banca.concluida ? "Sim" : "Não"}</DataItem>
                  <DataItem>
                    <ul>
                      <li>{banca.coordenadora.nome}</li>
                    </ul>
                  </DataItem>
                  <DataItem><FiChevronRight size={20} /></DataItem>
                </DataRow>
              ))}
              </DataTable>
            </TableContent>
          </Table>
        </Main>
        <Footer />
      </ContainerMain>
    </Container>
  )
}

export default Bancas