import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom'
import { FiPaperclip, FiBold, FiMapPin, FiTrash2, FiChevronRight} from 'react-icons/fi'
import { MdAccessTime } from 'react-icons/md'
import { BsNewspaper } from 'react-icons/bs'
import { useFetch } from './../../services/useFetch'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Main from '../../components/Main'
import ContainerMain from '../../components/ContainerMain'
import DataTable, { DataRow, DataItem } from '../../components/DataTable'
import TreeBar from '../../components/TreeBar'
import Table from '../../components/Table'
import TableContent from '../../components/TableContent'
import Form, { FormGroup } from '../../components/Form';
import Title from '../../components/Title';
import Loading from '../../components/Loading';
import ErrorButton from '../../components/ErrorButton';

import { Button, ButtonList, ButtonConfirm, Container } from './styles';

const ProjetoDescricao = () => {
  const history = useHistory()
  const { id } = useParams()
  const { data:projeto } = useFetch(`/estagios-pcct/${id}`)
  const { data:bancas } = useFetch(`/bancas/estagio-pcct/${id}`)
  const { data:alunos } = useFetch(`/alunos/estagio-pcct/${id}`)

  if(!projeto || !bancas || !alunos || projeto.tipo !== 'PROJETO') return <Loading />

  function handleCadastrarBanca(){
    history.push("/cadastro-banca")
  }

  function handleDescricaoBanca(id){
    history.push(`/descricao-banca/${id}`)
  }

  function handleDelete(id) { 
    alert(`Deletado: ${id}`)
  }

  return (
    <Container>
      <ContainerMain>
        <Header isLogin={true}/>
        <TreeBar>
          <li><Link to="/home">Tela Inicial</Link></li>
          <li><Link to={`/descricao-projeto/${id}`}>Descrição de Projeto</Link></li>
        </TreeBar>
        <Main>
          <Title>Descrição de Projeto</Title>
          <ButtonList>
            {!projeto.concluido && <li><ButtonConfirm>Concluir Projeto</ButtonConfirm></li>}
            <li><ErrorButton onClick={() => handleDelete(id)}>Deletar Projeto</ErrorButton></li>
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
                    defaultValue={projeto.titulo}
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
                    defaultValue={projeto.local}
                    name="local" 
                    placeholder="Digite o local do projeto..." 
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="descricao">
                    <BsNewspaper />
                    Descrição
                  </label>
                  <input 
                    defaultValue={projeto.descricao}
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
                    defaultValue={projeto.cargaHoraria}
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
                    defaultValue={projeto.anexo}
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
                    <DataItem>{aluno.grau.replace("_", " ")}</DataItem>
                    <DataItem>DISCENTE</DataItem>
                    <DataItem><FiTrash2 /></DataItem>
                  </DataRow>
                ))}
                <DataRow>
                  <DataItem>{projeto.responsavel.nome}</DataItem>
                  <DataItem>{projeto.responsavel.matricula}</DataItem>
                  <DataItem>{projeto.responsavel.cpf}</DataItem>
                  <DataItem>{projeto.responsavel.grau.replace("_", " ")}</DataItem>
                  <DataItem>ORIENTADOR</DataItem>
                  <DataItem><FiTrash2 /></DataItem>
                </DataRow>
              </DataTable>
            </TableContent>
          </Table>
        </Main>
        <Footer />
      </ContainerMain>
    </Container>
  );
}

export default ProjetoDescricao;