import React from 'react';
import { Link } from 'react-router-dom';
import { FiPaperclip ,FiBold, FiTrash2, FiAtSign, FiUsers, FiUser, FiBookmark  } from 'react-icons/fi'
import { MdAccessTime, MdAssignmentInd, MdSchool } from 'react-icons/md'
import { BsNewspaper } from 'react-icons/bs'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContainerMain from '../../components/ContainerMain'
import DataTable, { DataRow, DataItem } from '../../components/DataTable'
import Form, { FormGroup } from '../../components/Form'
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar'
import Table from '../../components/Table'
import TableContent from '../../components/TableContent'

import { Container } from './styles';

const CadastroProjeto = () => {
  return(
      <Container>
      <ContainerMain>
        <Header isLogin={true} />
        <TreeBar>
            <li><Link to="/home">Tela Inicial</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><Link to="/cadastro-projeto">Cadastrar um projeto</Link></li>
        </TreeBar>
        <Main>
          <Table>
            <TableContent title="Geral">
              <Form>
                <FormGroup>
                  <label htmlFor="titulo">
                    <FiBold />
                    Título
                  </label>
                  <input 
                    name="titulo" 
                    placeholder="Digite o título do projeto..." 
                    type="text"
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
                <FormGroup>
                  <label htmlFor="descricao">
                    <BsNewspaper />
                    Descrição
                  </label>
                  <input 
                    name="descricao" 
                    placeholder="Digite a descrição..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="ch">
                    <MdAccessTime />
                    Carga horária
                  </label>
                  <input 
                    name="ch" 
                    placeholder="Digite a carga horária..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="anexo">
                    <FiPaperclip />
                    Anexo
                  </label>
                  <input 
                    name="anexo" 
                    type="file"
                  />
                </FormGroup>
              </Form>
            </TableContent>
            <TableContent title="Discente">
              <Form>
                <FormGroup>
                  <label htmlFor="nome">
                    <FiBold />
                    Nome
                  </label>
                  <input 
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
                  <select name="curso">
                    <option value="INF" selected >INF</option> 
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
                    name="ano-conclusao" 
                    placeholder="Digite o ano de conclusão..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="turno">
                    <MdAccessTime />
                    Turno
                  </label>
                  <select name="curso">
                    <option value="INTEGRADO" selected >INTEGRADO</option> 
                    <option value="SUBSEQUENTE" >SUBSEQUENTE</option>
                    <option value="GRADUAÇÃO">GRADUAÇÃO</option>
                    <option value="MESTRADO">MESTRADO</option>
                    <option value="DOUTORADO">DOUTORADO</option>
                  </select>
                </FormGroup>
              </Form>
            </TableContent>
            <TableContent title="Docente">
              <Form>
                <FormGroup>
                  <label htmlFor="nome">
                    <FiBold />
                    Nome
                  </label>
                  <input 
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
                    name="cpf" 
                    placeholder="Digite o cpf do docente..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="funcao">
                    <FiBookmark />
                    Função
                  </label>
                  <select name="funcao">
                    <option value="COORDENADOR" selected >COORDENADOR</option> 
                    <option value="COODENADOR_ADJUNTO" >COORDENADOR ADJUNTO</option> 
                    <option value="ORIENTADOR" >ORIENTADOR</option>
                    <option value="COLABORADOR">COLABORADOR</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="formacao">
                    <MdSchool />
                    Formação
                  </label>
                  <select name="formacao">
                    <option value="GRADUADO" selected >GRADUADO</option> 
                    <option value="MESTRE" >MESTRE</option> 
                    <option value="DOUTOR" >DOUTOR</option>
                  </select>
                </FormGroup>
              </Form>
            </TableContent>
            <TableContent title="Externo">
              <Form>
                <FormGroup>
                  <label htmlFor="nome">
                    <FiBold />
                    Nome
                  </label>
                  <input 
                    name="nome" 
                    placeholder="Digite o nome..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="email">
                    <FiAtSign />
                    E-mail
                  </label>
                  <input 
                    name="email" 
                    placeholder="Digite o email..." 
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="cpf">
                    <FiUser />
                    CPF
                  </label>
                  <input 
                    name="cpf" 
                    placeholder="Digite o cpf..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="funcao">
                    <FiBookmark />
                    Função
                  </label>
                  <select name="funcao">
                    <option value="COORDENADOR" selected >COORDENADOR</option> 
                    <option value="COODENADOR_ADJUNTO" >COORDENADOR ADJUNTO</option> 
                    <option value="ORIENTADOR" >ORIENTADOR</option>
                    <option value="COLABORADOR">COLABORADOR</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="formacao">
                    <MdSchool />
                    Formação
                  </label>
                  <select name="formacao">
                    <option value="GRADUADO" selected >GRADUADO</option> 
                    <option value="MESTRE" >MESTRE</option> 
                    <option value="DOUTOR" >DOUTOR</option>
                  </select>
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

export default CadastroProjeto;