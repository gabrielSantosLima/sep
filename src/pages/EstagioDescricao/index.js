import React from 'react';
import { Link } from 'react-router-dom'
import { FiPaperclip, FiBold, FiMapPin, FiMap, FiDownload, FiTrash2 } from 'react-icons/fi'
import { MdAccessTime } from 'react-icons/md'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContainerMain from '../../components/ContainerMain'
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar'
import Table from '../../components/Table'
import TableContent from '../../components/TableContent'

import { Container } from './styles';

const EstagioDescricao = () => {
  return (
    <Container>
      <ContainerMain>
        <Header isLogin={true}/>
        <TreeBar>
          <li><Link to="/home">Tela Inicial</Link></li>
          <li><Link to="/estagios">Estágios</Link></li>
        </TreeBar>

        <Main>
          <Table>
            <TableContent title="Descrição">
              <form>
                <div className="form-group">
                  <label htmlFor="titulo">
                    <FiBold />
                    Título
                  </label>
                  <input 
                    name="titulo" 
                    placeholder="Digite o título do estágio..." 
                    type="text"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="local">
                    <FiMapPin />
                    Local
                  </label>
                  <input 
                    name="local" 
                    placeholder="Digite o local do estágio..." 
                    type="text"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="curso">
                    <FiMap />
                    Curso
                  </label>
                  <input 
                    name="curso" 
                    placeholder="Digite o curso..." 
                    type="text"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="ch">
                    <MdAccessTime />
                    Carga horária
                  </label>
                  <input 
                    name="ch" 
                    placeholder="Digite a carga horária..." 
                    type="text"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="anexo">
                    <FiPaperclip />
                    Anexo
                  </label>
                  <input 
                    name="anexo" 
                    type="file"
                  />
                </div>

                <div className="form-group">
                  <button id="cancelar">
                    Cancelar
                  </button>
                  <button id="salvar">
                    Salvar
                  </button>
                </div>
              </form>
            </TableContent>
            <TableContent title="Bancas">
              <div className="bancas">
                <table>
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Horário</th>
                      <th>Local</th>
                      <th>Data de Finalização</th>
                      <th>Horário de Finalização</th>
                      <th>Participantes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12/01/2020</td>
                      <td>15:00h</td>
                      <td>Auditório Principal</td>
                      <td> - </td>
                      <td> - </td>
                      <td>
                        <ul>
                          <li>Gabriel Dos Santos</li>
                          <li>Pedro Silva da Silva</li>
                          <li>Neila Batista Xavier</li>
                        </ul>
                      </td>
                      <td><FiTrash2 /></td>
                    </tr>
                    <tr>
                      <td>12/01/2020</td>
                      <td>15:00h</td>
                      <td>Lab VI</td>
                      <td>13/04/2020</td>
                      <td>17:00h</td>
                      <td>
                        <ul>
                          <li>Gabriel Dos Santos</li>
                          <li>Pedro Silva da Silva</li>
                          <li>Neila Batista Xavier</li>
                        </ul>
                      </td>
                      <td><FiTrash2 /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TableContent>
            <TableContent title="Participantes">
              <div className="participantes">
                <table>
                  <thead>  
                    <tr>
                      <th>Nome</th>
                      <th>Matrícula</th>
                      <th>CPF</th>
                      <th>Grau Acadêmico</th>
                      <th>Função</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Gabriel Dos Santos Lima</td>
                      <td>201811440266</td>
                      <td>000000000-00</td>
                      <td>Integrado Nível Médio</td>
                      <td>Discente</td>
                      <td><FiTrash2 /></td>
                    </tr>
                    <tr>
                      <td>Pedro Da Silva Silva</td>
                      <td>201811440266</td>
                      <td>000000000-00</td>
                      <td>Mestre</td>
                      <td>Coordenador</td>
                      <td><FiTrash2 /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TableContent>
            <TableContent title="Documentos">
              <div className="documento">
                <FiPaperclip size={20}/>
                <span>Ata de relatório</span>
                <FiDownload className="download" size={20}/>
              </div>  
            </TableContent>
          </Table>
        </Main>
        
        <Footer />
      </ContainerMain>
    </Container>
  );
}

export default EstagioDescricao;