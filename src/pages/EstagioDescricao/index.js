import React from 'react';
import { useFetch } from './../../services/useFetch'
import { Link, useHistory, useParams } from 'react-router-dom'
import { FiPaperclip, FiBold, FiMapPin, FiDownload, FiTrash2, FiUsers, FiChevronRight} from 'react-icons/fi'
import { MdAccessTime } from 'react-icons/md'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContainerMain from '../../components/ContainerMain'
import DataTable, { DataRow, DataItem } from '../../components/DataTable'
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar'
import Table from '../../components/Table'
import TableContent from '../../components/TableContent'
import Form, { FormGroup } from '../../components/Form'
import DownloadTable, { DownloadItem } from '../../components/DownloadTable';
import Title from '../../components/Title';
import Loading from '../../components/Loading';

import { Container, ButtonConfirm, ButtonDelete, Button, ButtonList } from './styles';

const EstagioDescricao = () => {
  const history = useHistory()
  const { id } = useParams()
  const { data:estagio } = useFetch(`/estagios-pcct/${id}`)
  const { data:bancas } = useFetch(`/bancas/estagio-pcct/${id}`)
  const { data:alunos } = useFetch(`/alunos/estagio-pcct/${id}`)

  if(!estagio || !bancas || !alunos) return <Loading />

  function handleCadastrarBanca(){
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
          <li><Link to="/descricao-estagio">Descrição de Estágio</Link></li>
        </TreeBar>
        <Title>Descrição de Estágio</Title>
        <Main>
          <ButtonList>
            <li><ButtonConfirm>Concluir Estágio</ButtonConfirm></li>
            <li><ButtonDelete>Deletar Estágio</ButtonDelete></li>
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
                    defaultValue={estagio.titulo}
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
                    defaultValue={estagio.local}
                    name="local" 
                    placeholder="Digite o local do estágio..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="ch">
                    <MdAccessTime />
                    Carga horária
                  </label>
                  <input 
                    defaultValue={estagio.cargaHoraria}
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
                    defaultValue={estagio.anexo}
                    name="anexo" 
                    type="file"
                  />
                </FormGroup>
              </Form>
            </TableContent>
            <TableContent title="Bancas">
            <ButtonList>
              <li>
                <Button onClick={handleCadastrarBanca}>Adicionar Banca</Button>
              </li>
            </ButtonList>
              <DataTable 
                columns={[
                  "Data",
                  "Local", 
                  "Hora de Início", 
                  "Horário de Finalização", 
                  "Participantes", 
                  ""
              ]}
                isFullWidth={true}
                isScrolled={true}
                hasBorder={false}
                hasHover={true}
              >
                {bancas.map(banca => (
                  <DataRow key={banca.id} onClick={() => handleDescricaoBanca(banca.id)}>
                    <DataItem>{new Date(banca.data).toLocaleDateString()}</DataItem>
                    <DataItem>{banca.local}</DataItem>
                    <DataItem>{new Date(banca.horaInicio).toLocaleTimeString()}</DataItem>
                    <DataItem>{new Date(banca.horaFinalizado).toLocaleTimeString()}</DataItem>
                    <DataItem>
                      <ul>
                        <li>{banca.coordenadora.nome}</li>
                        {banca.avaliadores.map(avaliador => <li key={avaliador.id}>{avaliador.nome}</li>)}
                        {alunos.map(aluno => <li key={aluno.id}>{aluno.nome}</li>)}
                      </ul>
                    </DataItem>
                    <DataItem><FiChevronRight size={20}/></DataItem>
                  </DataRow>
                ))}
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
                {alunos.map(aluno => (
                  <DataRow>
                    <DataItem>{aluno.nome}</DataItem>
                    <DataItem>{aluno.matricula}</DataItem>
                    <DataItem>{aluno.cpf}</DataItem>
                    <DataItem>{aluno.grau}</DataItem>
                    <DataItem>DISCENTE</DataItem>
                    <DataItem><FiTrash2 /></DataItem>
                  </DataRow>
                ))}
                <DataRow>
                  <DataItem>{estagio.responsavel.nome}</DataItem>
                  <DataItem>{estagio.responsavel.matricula}</DataItem>
                  <DataItem>{estagio.responsavel.cpf}</DataItem>
                  <DataItem>{estagio.responsavel.grau}</DataItem>
                  <DataItem>ORIENTADOR</DataItem>
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

export default EstagioDescricao;