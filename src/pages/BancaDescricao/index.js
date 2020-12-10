import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { FiMapPin, FiClock, FiTrash2, FiCalendar, FiBookmark, FiUsers, FiDownload, FiPaperclip } from 'react-icons/fi'
import { useFetch } from './../../services/useFetch'
import { formatDate, formatTime } from './../../utils/formatDate'

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
import DownloadTable, { DownloadItem } from '../../components/DownloadTable';
import Loading from '../../components/Loading'
import ErrorButton from '../../components/ErrorButton'

import { Container, ButtonList, Button } from './styles.js';

const BancaDescricao = () => {
  const { id } = useParams()
  const { data:banca } = useFetch(`/bancas/${id}`)
  const { data:alunos } = useFetch(`/alunos/estagio-pcct/${banca?.estagioPcct?.id}`)

  console.log(banca)

  if(!banca || !alunos) return <Loading />

  function handleDelete(id) { 
    alert(`Deletado: ${id}`)
  }

  return (
    <Container>
      <ContainerMain>
        <Header isLogin={true} />
        <TreeBar>
          <li><Link to="/home">Tela Inicial</Link></li>
          <li><Link to={`/descricao-banca/${id}`}>Descrição de Banca</Link></li>
        </TreeBar>
        <Main>
          <Title>Descrição de Banca</Title>
          <ButtonList>
            {!banca.horaFinalizado !== null && <li><Button>Cadastrar Ficha de Avaliação</Button></li>}
            <li><ErrorButton onClick={()=> handleDelete(id)}>Deletar Banca</ErrorButton></li>
          </ButtonList>
          <Table>
            <TableContent title="Geral">
              <Form canEditable={false}>
                <FormGroup>
                  <label htmlFor="local">
                    <FiMapPin />
                    Local
                  </label>
                  <input
                    defaultValue={banca.local}
                    name="local" 
                    placeholder="Digite o local..." 
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
                    value={formatDate(new Date(banca?.data))}
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
                    defaultValue={formatTime(new Date(banca.horaInicio))}
                    name="inicio"  
                    type="time"
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="curso">
                    <FiUsers />
                    Curso
                  </label>
                  <select name="curso" defaultValue={banca.curso}>
                    <option>INF</option>
                    <option>IQUI</option>
                    <option>IELT</option>
                    <option>IMEC</option>
                    <option>IEDF</option>
                  </select>
                </FormGroup>
                  <FormGroup>
                  <label htmlFor="termino">
                    <FiClock />
                    Horário de Término
                  </label>
                  <input 
                    defaultValue={formatTime(new Date(banca.horaFinalizado))}
                    name="termino"
                    type="time"
                    disabled
                  />
                </FormGroup>
                 <FormGroup>
                  <label htmlFor="estagioProjeto">
                    <FiBookmark />
                    Projeto/Estágio
                  </label>
                  <input 
                    defaultValue={banca.estagioPcct.titulo}
                    name="estagioProjeto"
                    type="text"
                    disabled
                  />
                </FormGroup>
              </Form>
            </TableContent>
            <TableContent title="Documentos">
              <DownloadTable>
                
                <DownloadItem>
                  <FiPaperclip size={20}/>
                  <span>Ata de relatório</span>
                  <FiDownload className="download" size={20}/>
                </DownloadItem>
                
                <DownloadItem>
                  <FiPaperclip size={20}/>
                  <span>{`Certificado - ${banca.coordenadora.nome}`}</span>
                  <FiDownload className="download" size={20}/>
                </DownloadItem>

                {alunos.map(aluno => (
                  <DownloadItem key={aluno.id}>
                    <FiPaperclip size={20}/>
                    <span>{`Certificado - ${aluno.nome}`}</span>
                    <FiDownload className="download" size={20}/>
                  </DownloadItem>
                ))}
                {banca.avaliadores.map(avaliador=>(
                  <DownloadItem key={avaliador.id}>
                    <FiPaperclip size={20}/>
                    <span>{`Certificado - ${avaliador.nome}`}</span>
                    <FiDownload className="download" size={20}/>
                  </DownloadItem>
                ))}
              </DownloadTable> 
            </TableContent>
          </Table>
          <Title>Participantes</Title>
          <DataTable 
            columns={["Nome","Matrícula","CPF","Grau Acadêmico","Função", ""]}
            isFullWidth = {true}
            isScrolled = {true}
          >
            <DataRow>
              <DataItem>{banca.coordenadora.nome}</DataItem>
              <DataItem>{banca.coordenadora.matricula}</DataItem>
              <DataItem>{banca.coordenadora.cpf}</DataItem>
              <DataItem>{banca.coordenadora.grau.replace("_", " ")}</DataItem>
              <DataItem>COORDENADOR(A)</DataItem>
              <DataItem><FiTrash2 /></DataItem>
            </DataRow>
            {alunos.map(aluno => (
              <DataRow key={aluno.id}>
                <DataItem>{aluno.nome}</DataItem>
                <DataItem>{aluno.matricula}</DataItem>
                <DataItem>{aluno.cpf}</DataItem>
                <DataItem>{aluno.grau.replace("_", " ")}</DataItem>
                <DataItem>DISCENTE</DataItem>
                <DataItem><FiTrash2 /></DataItem>
              </DataRow>
            ))}
            {banca.avaliadores.map(avaliador => (
              <DataRow key={avaliador.id}>
                <DataItem>{avaliador.nome}</DataItem>
                <DataItem>{avaliador.matricula}</DataItem>
                <DataItem>{avaliador.cpf}</DataItem>
                <DataItem>{avaliador.grau.replace("_", " ")}</DataItem>
                <DataItem>AVALIADOR</DataItem>
                <DataItem><FiTrash2 /></DataItem>
              </DataRow>
            ))}
          </DataTable>
        </Main>
        <Footer />
      </ContainerMain>
    </Container>

    )

}


export default BancaDescricao;