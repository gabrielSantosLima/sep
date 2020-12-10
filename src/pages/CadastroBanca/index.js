import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import { FiBold, FiMapPin, FiTrash2, FiUsers } from 'react-icons/fi'
import { MdAssignmentInd } from 'react-icons/md';

import api from '../../services/api'

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
import SucessPopup from '../../components/SucessPopup';
import FailPopup from '../../components/FailPopup';

import { Container } from './styles';

const CadastroBanca = () => {
  const [users, setUsers] = useState([])
  const [estagioPcct, setEstagioPcct] = useState()
  const [isSucess, setIsSucess] = useState(false)
  const [isFail, setIsFail] = useState(false)

  const inputData = useRef()
  const inputHoraInicio = useRef()
  const inputHoraFim = useRef()
  const inputLocal = useRef()

  const coordenadoraRefs = {
    inputMatricula : useRef(),
    inputNome : useRef()
  }
  
  const avaliadorRefs = {
    inputMatricula : useRef(),
    inputNome : useRef()
  }
  
  const estagioRefs = {
    inputTitulo : useRef(),
    inputCurso : useRef()
  }

  async function handleSubmit(){
    if(!estagioPcct) return alert('Sem estágio ou projeto definido')
    if(users.length < 3) return alert('Sem participantes definidos')
    
    const coordenadora = users.find(user => user.tipo === 'COORDENADORA')
    const avaliadores = users.filter(user => user.tipo === 'AVALIADORES')
    const {data: alunos} = await api.get(`/alunos/estagio-pcct/${estagioPcct.id}`) 

    estagioPcct.alunos = alunos
    setEstagioPcct()

    const banca = {
       data: new Date(inputData.current.value),
       tipo: estagioPcct?.tipo,
       curso: coordenadora?.curso,
       local: inputLocal.current.value,
       horaInicio: new Date(inputHoraInicio.current.value),
       horaFinalizado: new Date(inputHoraFim.current.value),
       estagioPCCT: estagioPcct,
       avaliadores: avaliadores,
       coordenadora: coordenadora
    }

    const { data, status} = await api.post('/solicitar-banca', banca)
    if(status === 400) return setIsFail(true)
    setIsSucess(true)
  }

  async function addCoordenadora(){
    const { value: matricula } = coordenadoraRefs.inputMatricula.current
    if(matricula == "") return alert('Campo vazio')
    const { data: coordenadores } = await api.get(`/coordenadores/encontrar-matricula?matricula=${matricula}`)
    if(coordenadores.length === 0) return alert('Não há coordenadores com esta matrícula.')
    if(exists(coordenadores[0].cpf)) return alert('Cpf já cadastrado!')
    setUsers([...users, coordenadores[0]])
  } 

  async function addAvaliador(){
    const { value: matricula } = avaliadorRefs.inputMatricula.current
    if(matricula == "") return alert('Campo vazio')
    const { data: avaliadores } = await api.get(`/professores/encontrar-matricula?matricula=${matricula}`)
    if(avaliadores.length === 0) return alert('Não há avaliadores com este matrícula.')
    if(exists(avaliadores[0].cpf)) return alert('Cpf já cadastrado!')
    setUsers([...users, avaliadores[0]])
  }
  
  async function addEstagioPcct(){
    if(estagioPcct) return alert('Estágio ou projeto já foi cadastrado.')
    const { value: titulo } = estagioRefs.inputTitulo.current
    if(titulo == "") return alert('Campo vazio')
    const { data: estagios } = await api.get(`/estagios-pcct?titulo=${titulo}`)
    if(estagios.length === 0) return alert('Não há estágios/projetos com este título.')
    setEstagioPcct(estagios[0])
  }

  function exists(cpf){
    const user = users.find(user => user.cpf === cpf)
    if(user) return true 
    return false 
  }

  return(
    <Container>
      {isFail && <FailPopup />}
      {isSucess && <SucessPopup />}
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
              <Form callback={handleSubmit}>
                <FormGroup>
                  <label htmlFor="data">
                    Data de realização
                  </label>
                  <input
                    ref={inputData}
                    name="data"  
                    type="date"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="horaInicio">
                    Horário de início
                  </label>
                  <input
                    ref={inputHoraInicio}
                    name="horaInicio"
                    type="time"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="horaFim">
                    Horário de finalização
                  </label>
                  <input
                    ref={inputHoraFim}
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
                    ref={inputLocal}
                    name="local"
                    placeholder="Digite o local de realização..."
                    type="text"
                  />
                </FormGroup>
              </Form>  
            </TableContent>
            <TableContent title="Coordenadora">
              <Form callback={addCoordenadora}>
                <FormGroup>
                  <label htmlFor="matricula">
                    <MdAssignmentInd />
                    Matrícula
                  </label>
                  <input
                    ref={coordenadoraRefs.inputMatricula} 
                    type="text" 
                    placeholder="Digite a matrícula..."/>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="nome">
                    <FiBold />
                    Nome
                  </label>
                  <input
                    ref={coordenadoraRefs.inputNome} 
                    type="text" 
                    placeholder="Digite o nome..."/>
                </FormGroup>
              </Form>  
            </TableContent>
            <TableContent title="Avaliador">
              <Form callback={addAvaliador}>
                <FormGroup>
                  <label htmlFor="matricula">
                    <MdAssignmentInd />
                    Matrícula
                  </label>
                  <input 
                    ref={avaliadorRefs.inputMatricula} 
                    type="text" 
                    placeholder="Digite a matrícula..."/>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="nome">
                    <FiBold />
                    Nome
                  </label>
                  <input
                    ref={avaliadorRefs.inputNome} 
                    type="text" 
                    placeholder="Digite o nome..."/>
                </FormGroup>
              </Form>  
            </TableContent>
            <TableContent title="Estágio / PCCT">
              <Form callback={addEstagioPcct}>
                <FormGroup>
                  <label htmlFor="titulo">
                    <FiBold />
                    Título
                  </label>
                  <input
                    ref={estagioRefs.inputTitulo} 
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
                  <select name="curso" ref={estagioRefs.inputCurso}>
                    <option>INF</option> 
                    <option>IQUI</option>
                    <option>IMEC</option>
                    <option>IEDF</option>
                    <option>IELT</option>
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
            {users.map(user => (
              <DataRow key={user.cpf}>
                <DataItem>{user.nome}</DataItem>
                <DataItem>{user.matricula}</DataItem>
                <DataItem>{user.cpf}</DataItem>
                <DataItem>{user.grau}</DataItem>
                <DataItem>{user.tipo}</DataItem>
                <DataItem><FiTrash2 /></DataItem>
              </DataRow>
            ))}
          </DataTable>
        </Main>
        <Footer />
      </ContainerMain>
    </Container>
  );
}

export default CadastroBanca;