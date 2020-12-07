import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPaperclip, FiBold, FiMapPin, FiMap, FiDownload, FiTrash2, FiChevronRight} from 'react-icons/fi'
import { MdAccessTime } from 'react-icons/md'
import { BsNewspaper } from 'react-icons/bs'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Main from '../../components/Main'
import ContainerMain from '../../components/ContainerMain'
import DataTable, { DataRow, DataItem } from '../../components/DataTable'
import TreeBar from '../../components/TreeBar'
import Table from '../../components/Table'
import TableContent from '../../components/TableContent'
import Form, { FormGroup } from '../../components/Form';
import DownloadTable, { DownloadItem } from '../../components/DownloadTable';
import Title from '../../components/Title';

import { Button, ButtonList, ButtonDelete, ButtonConfirm, Container } from './styles';

const ProjetoDescricao = () => {
  const history = useHistory()

  function handleCadastrarBanca(){
    history.push("/cadastro-banca")
  }

  function handleDescricaoBanca(){
    history.push("/descricao-banca")
  }

  return (
    <Container>
      <ContainerMain>
        <Header isLogin={true}/>
        <TreeBar>
          <li><Link to="/home">Tela Inicial</Link></li>
          <li><Link to="/descricao-projeto">Descrição de Projeto</Link></li>
        </TreeBar>
        <Main>
          <Title>Descrição de Projeto</Title>
          <ButtonList>
            <li><ButtonConfirm>Concluir Projeto</ButtonConfirm></li>
            <li><ButtonDelete>Deletar Projeto</ButtonDelete></li>
          </ButtonList>
          <Table>
            <TableContent title="Descrição">
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
                  <label htmlFor="local">
                    <FiMapPin />
                    Local
                  </label>
                  <input 
                    name="local" 
                    placeholder="Digite o local do projeto..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="curso">
                    <FiMap />
                    Curso
                  </label>
                  <input 
                    name="curso" 
                    placeholder="Digite o curso..." 
                    type="text"
                  />
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
            <TableContent title="Bancas">
              <ButtonList>
                <li><Button onClick={handleCadastrarBanca}>Adicionar Banca</Button></li>
              </ButtonList>
              <DataTable 
                columns={[
                  "Data", 
                  "Horário", 
                  "Local", 
                  "Data de Finalização", 
                  "Horário de Finalização", 
                  "Participantes", 
                  ""
              ]}
                isFullWidth={true}
                isScrolled={true}
                hasBorder={false}
                hasHover={true}
              >
                <DataRow onClick={handleDescricaoBanca}>
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
                  <DataItem><FiChevronRight size={20}/></DataItem>
                </DataRow>
              </DataTable>
            </TableContent>
            <TableContent title="Participantes">
              <DataTable 
                columns={[
                  "Nome", 
                  "Matrícula", 
                  "CPF", 
                  "Grau Acadêmico", 
                  "Função",
                  ""
              ]}
                isFullWidth={true}
                isScrolled={true}
                hasBorder={false}
              >
                <DataRow>
                  <DataItem>Gabriel Dos Santos Lima</DataItem>
                  <DataItem>2018324100</DataItem>
                  <DataItem>XXX.XXX.XXX-XX</DataItem>
                  <DataItem>Mestre</DataItem>
                  <DataItem>Coordenador</DataItem>
                  <DataItem><FiTrash2 /></DataItem>
                </DataRow>
              </DataTable>
            </TableContent>
            <TableContent title="Documentos">
              <DownloadTable>
                <DownloadItem>
                  <FiPaperclip size={20}/>
                  <span>Ata de relatório</span>
                  <FiDownload className="download" size={20}/>
                </DownloadItem>
              </DownloadTable>
            </TableContent>
          </Table>
        </Main>
        <Footer />
      </ContainerMain>
    </Container>
  );
}

export default ProjetoDescricao;