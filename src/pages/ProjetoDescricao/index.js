import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FiPaperclip, FiBold, FiMapPin, FiMap, FiDownload, FiTrash2 } from 'react-icons/fi'
import { MdAccessTime } from 'react-icons/md'
import { BsNewspaper } from 'react-icons/bs'

import Header from './../../components/Header'
import Footer from './../../components/Footer'
import TreeBar from './../../components/TreeBar'

import { Container, Box, Main, ContentBox } from './styles';

const ProjetoDescricao = () => {
  const [indexFrame, setIndexFrame] = useState(0)
  
  function handleFrame(index){
    setIndexFrame(index)
  }

  return (
    <Container>
      <Header isLogin={true}/>
      <TreeBar>
        <li><Link to="/home">Tela Inicial</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
      </TreeBar>

      <Main>
        <Box> 
          <nav>
            <ul>
              <li 
                className={indexFrame === 0 ? "selected": ""} 
                onClick={() => handleFrame(0)}>
                  Descrição
                </li>
              <li 
                className={indexFrame === 1 ? "selected": ""} 
                onClick={() => handleFrame(1)}>
                  Bancas
                </li>
              <li 
                className={indexFrame === 2 ? "selected": ""} 
                onClick={() => handleFrame(2)}>
                  Participantes
                </li>
              <li 
                className={indexFrame === 3 ? "selected": ""} 
                onClick={() => handleFrame(3)}>
                  Documentos
                </li>
            </ul>
          </nav>
          
        {indexFrame === 0 && 
          <ContentBox>
            <form>
              <div className="form-group">
                <label htmlFor="titulo">
                  <FiBold />
                  Título
                </label>
                <input 
                  name="titulo" 
                  placeholder="Digite o título do projeto..." 
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
                  placeholder="Digite o local do projeto..." 
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
                <label htmlFor="descricao">
                  <BsNewspaper />
                  Descrição
                </label>
                <input 
                  name="descricao" 
                  placeholder="Digite a descrição..." 
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
          </ContentBox>
        }
        {indexFrame === 1 && 
          <ContentBox>
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
          </ContentBox>
        }
        {indexFrame === 2 && 
          <ContentBox>
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
                    <td>Orientador</td>
                    <td><FiTrash2 /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ContentBox>
        }
        {indexFrame === 3 && 
          <ContentBox>
            <div className="documento">
              <FiPaperclip size={20}/>
              <span>Ata de relatório</span>
              <FiDownload className="download" size={20}/>
            </div>  
          </ContentBox>
        }
        </Box>
      </Main>
      
      <Footer />
    </Container>
  );
}

export default ProjetoDescricao;