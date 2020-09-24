import React from 'react';
import { FiPaperclip, FiBold, FiMapPin, FiMap } from 'react-icons/fi'
import { MdAccessTime } from 'react-icons/md'

import Header from './../../components/Header'
import Footer from './../../components/Footer'
import TreeBar from './../../components/TreeBar'

import { Container, Box, Main } from './styles';

const EstagioDescricao = () => {
  return (
    <Container>
      <Header isLogin={true}/>
      <TreeBar>
        <li>Tela Inicial</li>
        <li>Estágios</li>
      </TreeBar>

      <Main>
        <Box> 
          <nav>
            <ul>
              <li className="selected">Descrição</li>
              <li>Bancas</li>
              <li>Participantes</li>
              <li>Documentos</li>
            </ul>
          </nav>

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
        </Box>
      </Main>
      
      <Footer />
    </Container>
  );
}

export default EstagioDescricao;