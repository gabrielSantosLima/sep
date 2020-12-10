import React from 'react';
import { useFetch } from './../../services/useFetch'
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
import Loading from '../../components/Loading';

import { Container, Left, Right, UserIcon, ButtonList, ButtonConfirm } from './styles';

const cursos = ["INF", "IQUI", "IELT", "IMEC", "IEDF"]

const Homepage = () => {
  const history = useHistory()
  const { data : estagiosPcct } = useFetch(`/estagios-pcct?curso=${cursos[0]}`)
  const { data : notificacoes } = useFetch('/notificacao-banca')

  if(!estagiosPcct || !notificacoes) return <Loading />

  console.log(estagiosPcct)
  console.log(notificacoes)

  function handleCadastrarEstagio(){
    history.push("/cadastro-estagio")
  }
  
  function handleCadastrarProjeto(){
    history.push("/cadastro-projeto")
  }
  
  function handleDescricaoEstagio(id){
    history.push(`/descricao-estagio/${id}`)
  }
  
  function handleDescricaoProjeto(id){
    history.push(`/descricao-projeto/${id}`)
  }
  
  function handleConfirmarBanca(id){
    history.push(`/confirmar-banca/${id}`)
  }
  
  function handleClickSolicitarBanca(){
    history.push("/cadastro-banca")
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
                  columns={["Título", "Concluído", "Carga Horária", "Turno", "Responsável",""]}
                  isFullWidth={true}
                  isScrolled={true}
                  hasBorder={false}
                  hasHover={true}
                >
                  {estagiosPcct.map(estagioPcct => {
                    if(estagioPcct.tipo === 'ESTAGIO'){
                      return (
                      <DataRow key={estagioPcct.id} onClick={() => handleDescricaoEstagio(estagioPcct.id)}>
                        <DataItem>{estagioPcct.titulo}</DataItem>
                        <DataItem>{estagioPcct.concluido ? "Sim" : "Não"}</DataItem>
                        <DataItem>{estagioPcct.cargaHoraria}</DataItem>
                        <DataItem>{estagioPcct.modalidadeCurso}</DataItem>
                        <DataItem>{estagioPcct.responsavel?.nome}</DataItem>
                        <DataItem><FiChevronRight size={20} /></DataItem>
                      </DataRow>
                      );
                    }
                  })}
                </DataTable>
              </TableContent>
              <TableContent title="Projetos">
                <ButtonList>
                  <li><ButtonConfirm onClick={handleCadastrarProjeto}>Adicionar Novo Projeto</ButtonConfirm></li>
                </ButtonList>
                <DataTable 
                  columns={["Título", "Concluído", "Carga Horária", "Turno", "Responsável",""]}
                  isFullWidth={true}
                  isScrolled={true}
                  hasBorder={false}
                  hasHover={true}
                >
                  {estagiosPcct.map(estagioPcct => {
                    if(estagioPcct.tipo === 'PROJETO'){
                      return (
                      <DataRow key={estagioPcct.id} onClick={() => handleDescricaoProjeto(estagioPcct.id)}>
                        <DataItem>{estagioPcct.titulo}</DataItem>
                        <DataItem>{estagioPcct.concluido ? "Sim" : "Não"}</DataItem>
                        <DataItem>{estagioPcct.cargaHoraria}</DataItem>
                        <DataItem>{estagioPcct.modalidadeCurso}</DataItem>
                        <DataItem>{estagioPcct.responsavel?.nome}</DataItem>
                        <DataItem><FiChevronRight size={20} /></DataItem>
                      </DataRow>
                      );
                    }
                  })
                  }
                </DataTable>
              </TableContent>
            </Table>
            <Table>
              <TableContent title="Bancas Solicitadas">
                <ButtonList>
                  <li>
                    <ButtonConfirm 
                      onClick={handleClickSolicitarBanca}
                    >
                      Solicitar Nova Banca
                    </ButtonConfirm>
                  </li>
                </ButtonList>
                <DataTable 
                  columns={["Data de Notificação","Visualizado", ""]}
                  isFullWidth={true}
                  isScrolled={true}
                  hasBorder={false}
                  hasHover={true}
                >
                  {notificacoes.map(notificacao => (
                      <DataRow key={notificacao.id} onClick={() => handleConfirmarBanca(notificacao.id)}>
                        <DataItem>{notificacao.dataNotificacao}</DataItem>
                        <DataItem>{notificacao.jaVisualizado}</DataItem>
                        <DataItem><FiChevronRight size={20}/></DataItem>
                      </DataRow>
                  ))
                  }
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