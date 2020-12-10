import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPaperclip ,FiBold, FiMapPin, FiTrash2, FiAtSign, FiUsers, FiUser, FiBookmark  } from 'react-icons/fi'
import { MdAccessTime, MdAssignmentInd, MdSchool } from 'react-icons/md'
import { BsNewspaper } from 'react-icons/bs'

import api from '../../services/api'

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
import SucessPopup from '../../components/SucessPopup'
import FailPopup from '../../components/FailPopup'

import { Container } from './styles';
import { useRef } from 'react';

const CadastroEstagio = () => {
  const [users, setUsers] = useState([])
  const [isSucess, setIsSucess] = useState(false)
  const [isFail, setIsFail] = useState(false)

  const inputTitulo = useRef()
  const inputCargaHoraria = useRef()
  const inputLocal = useRef()
  const inputDescricao = useRef()
  const inputModalidade = useRef()
  const inputAnexo = useRef()

  const discenteRefs = {
    inputMatricula : useRef(),
    inputCpf : useRef(),
    inputNome : useRef(),
    inputEmail : useRef(),
    inputCurso : useRef(),
    inputTurma : useRef(),
    inputModalidadeCurso : useRef(),
    inputDataConclusao : useRef(),
    inputGrau : useRef(),
  }
  
  const docenteRefs = {
    inputMatricula : useRef(),
    inputCpf : useRef(),
    inputNome : useRef(),
    inputEmail : useRef(),
    inputGrau : useRef()
  }

  async function handleSubmit(){
    if(users.length  < 2) return alert('Número de participante incompleto.')

    let orientador = users.find(usuario => usuario.funcao === 'ORIENTADOR')
    let discentes = users.filter(usuario => usuario.funcao === 'DISCENTE')

    const {data : { id:idOrientador }, status : statusOrientador} =  await api.post('/professores', orientador)
    if(statusOrientador === 400) return setIsFail(true)

    const estagio = {
      titulo: inputTitulo.current.value,
      cargaHoraria: Number.parseInt(inputCargaHoraria.current.value),
      local: inputLocal.current.value,
      descricao: inputDescricao.current.value,
      tipo: 'ESTAGIO',
      concluido: false,
      modalidadeCurso: inputModalidade.current.value,
      anexo: null,
      alunos: null,
      responsavel: {
        id: idOrientador
      },
      bancas: null
    }

    console.log(estagio)

    const {data:{ id:idEstagio }, status: statusEstagio } = await api.post('/estagios-pcct', estagio)
    
    if(statusEstagio == 400) return setIsFail(true)

    for(const discente of discentes){
      discente.estagioPcct.id = idEstagio
      const {status: statusDiscente} = await api.post('/alunos', discente)
      if(statusDiscente == 400) return setIsFail(true)
    }

    setIsSucess(true)
  }

  function addDiscente(){
    const discente = {
      matricula:discenteRefs.inputMatricula.current.value,
      cpf: discenteRefs.inputCpf.current.value,
      nome: discenteRefs.inputNome.current.value,
      email: discenteRefs.inputEmail.current.value,
      curso: discenteRefs.inputCurso.current.value,
      turma: discenteRefs.inputTurma.current.value,
      modalidadeCurso: 'INTEGRADO',
      dataConclusao: Number.parseInt(discenteRefs.inputDataConclusao.current.value),
      funcao: 'DISCENTE',
      grau: discenteRefs.inputGrau.current.value,
      estagioPcct: { id:'' }
    }
    if(exists(discente.cpf)) return alert('Cpf já cadastrado');
    setUsers([...users, discente])
  } 

  function addOrientador(){
    const orientador = {
      matricula:docenteRefs.inputMatricula.current.value,
      cpf:docenteRefs.inputCpf.current.value,
      nome:docenteRefs.inputNome.current.value,
      email:docenteRefs.inputEmail.current.value,
      funcao:'ORIENTADOR',
      turma: null,
      dataConclusao: null,
      curso: null,
      modalidadeCurso: null,
      grau:docenteRefs.inputGrau.current.value,
    }
    if(exists(orientador.cpf)) return alert('Cpf já cadastrado');
    setUsers([...users, orientador])
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
            <li><Link to="/estagios">Estágios</Link></li>
            <li><Link to="/cadastro-estagio">Cadastrar um estágio</Link></li>
        </TreeBar>
        <Main>  
          <Title>Cadatrar Estágio</Title>
          <Table>
            <TableContent title="Geral">
              <Form callback={handleSubmit}>
                <FormGroup>
                  <label htmlFor="titulo">
                    <FiBold />
                    Título
                  </label>
                  <input 
                    ref={inputTitulo}
                    name="titulo" 
                    placeholder="Digite o título do estágio..." 
                    type="text"
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
                    placeholder="Digite o local do estágio..."
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="descricao">
                    <BsNewspaper />
                    Descrição
                  </label>
                  <input
                    ref={inputDescricao}
                    name="descricao" 
                    placeholder="Digite a descrição..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="turno">
                    <MdAccessTime />
                    Turno
                  </label>
                  <select name="curso" ref={inputModalidade}>
                    <option value="INTEGRADO" selected>INTEGRADO</option> 
                    <option value="SUBSEQUENTE" >SUBSEQUENTE</option>
                    <option value="GRADUAÇÃO">GRADUAÇÃO</option>
                    <option value="MESTRADO">MESTRADO</option>
                    <option value="DOUTORADO">DOUTORADO</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="ch">
                    <MdAccessTime />
                    Carga horária
                  </label>
                  <input
                    ref={inputCargaHoraria}
                    name="ch"
                    placeholder="Digite a carga horária..."
                    type="number"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="anexo">
                    <FiPaperclip />
                    Anexo
                  </label>
                  <input
                    ref={inputAnexo}
                    name="anexo" 
                    type="file"
                  />
                </FormGroup>
              </Form>
            </TableContent>
            <TableContent title="Discente">
              <Form callback={addDiscente}>
                <FormGroup>
                  <label htmlFor="nome">
                    <FiBold />
                    Nome
                  </label>
                  <input
                    ref={discenteRefs.inputNome}
                    name="nome" 
                    placeholder="Digite o nome do discente..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>   
                  <label htmlFor="matricula">
                    <MdAssignmentInd />
                    Matrícula
                  </label>
                  <input
                    ref={discenteRefs.inputMatricula}
                    name="matricula" 
                    placeholder="Digite a matrícula do discente..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="email">
                    <FiAtSign />
                    E-mail
                  </label>
                  <input
                    ref={discenteRefs.inputEmail}
                    name="email" 
                    placeholder="Digite o email do discente..." 
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="curso">
                    <FiUsers />
                    Curso
                  </label>
                  <select name="curso" ref={discenteRefs.inputCurso}>
                    <option value="INF" selected>INF</option> 
                    <option value="IQUI" >IQUI</option>
                    <option value="IQUI">IMEC</option>
                    <option value="IEDF">IEDF</option>
                    <option value="IELT">IELT</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="cpf">
                    <FiUser />
                    CPF
                  </label>
                  <input 
                    name="cpf"
                    ref={discenteRefs.inputCpf}
                    placeholder="Digite o cpf do discente..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="turma">
                    <MdSchool />
                    Turma
                  </label>
                  <input 
                    name="turma"
                    ref={discenteRefs.inputTurma}
                    placeholder="Digite a turma do discente..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="ano-conclusao">
                    <MdSchool />
                    Ano de Conclusão
                  </label>
                  <input
                    ref={discenteRefs.inputDataConclusao}
                    name="ano-conclusao" 
                    placeholder="Digite o ano de conclusão..." 
                    type="number"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="turno">
                    <MdAccessTime />
                    Turno
                  </label>
                  <select name="curso" ref={discenteRefs.inputModalidadeCurso}>
                    <option value="INTEGRADO" selected>INTEGRADO</option> 
                    <option value="SUBSEQUENTE" >SUBSEQUENTE</option>
                    <option value="GRADUAÇÃO">GRADUAÇÃO</option>
                    <option value="MESTRADO">MESTRADO</option>
                    <option value="DOUTORADO">DOUTORADO</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="grau">
                    <MdSchool />
                    Grau Acadêmico
                  </label>
                  <select name="grau" ref={discenteRefs.inputGrau} >
                    <option value="ENSINO_FUNDAMENTAL" selected>ENSINO FUNDAMENTAL</option> 
                    <option value="ENSINO_MEDIO" >ENSINO MÉDIO</option> 
                    <option value="GRADUADO" >GRADUADO</option> 
                    <option value="MESTRE" >MESTRE</option> 
                    <option value="DOUTOR" >DOUTOR</option>
                  </select>
                </FormGroup>
              </Form>
            </TableContent>
            <TableContent title="Orientador">
              <Form callback={addOrientador}>
                <FormGroup>
                  <label htmlFor="nome">
                    <FiBold />
                    Nome
                  </label>
                  <input
                    ref={docenteRefs.inputNome} 
                    name="nome" 
                    placeholder="Digite o nome do docente..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>   
                  <label htmlFor="matricula">
                    <MdAssignmentInd />
                    Matrícula
                  </label>
                  <input
                    ref={docenteRefs.inputMatricula}  
                    name="matricula" 
                    placeholder="Digite a matrícula do docente..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="email">
                    <FiAtSign />
                    E-mail
                  </label>
                  <input
                    ref={docenteRefs.inputEmail}  
                    name="email" 
                    placeholder="Digite o email do docente..." 
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="cpf">
                    <FiUser />
                    CPF
                  </label>
                  <input
                    ref={docenteRefs.inputCpf}  
                    name="cpf" 
                    placeholder="Digite o cpf do docente..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="formacao">
                    <MdSchool />
                    Formação
                  </label>
                  <select name="formacao" ref={docenteRefs.inputGrau} >
                    <option value="GRADUADO" selected>GRADUADO</option> 
                    <option value="MESTRE" >MESTRE</option> 
                    <option value="DOUTOR" >DOUTOR</option>
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
                <DataItem>{user.funcao}</DataItem>
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

export default CadastroEstagio;
