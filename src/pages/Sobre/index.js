import React from 'react';
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import { DiGithubFull } from 'react-icons/di'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ContainerMain from '../../components/ContainerMain'
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar';

import { Container, CardDev, Info } from './styles';

const Sobre = () => {
  return(
    <Container>
      <ContainerMain>
        <Header isLogin={true} />
        <TreeBar>
          <li><Link to="/home">Tela Inicial</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </TreeBar>
        <Main>
          <h1> SEP - Sistema de Estágio e Projeto </h1>
          <p> 
          O SEP simplifica o processo de avaliação de estágios e projetos submetidos aos alunos concluentes sob
          a responsabilidade do Departamento Acadêmico de Informação e Comunicação (DAIC) através dos módulos de: 
          submissão e controle dos projetos de conclusão de curso, submissão e controle de estágios, submissão e 
          controle de bancas de avaliação, controle de documentos referentes às bancas de avaliação, emissão de certificados.
          </p>
          <Info>
            <ul className="version area">
              <h3>Versão</h3>
              <p className="version">1.0</p>
            </ul>
            <ul className="depto area">
              <a href="http://www2.ifam.edu.br/campus/cmc/diretorias/ensino/diretoria-de-ensino/departamentos#DAIC">
                <h3>DAIC</h3>
              </a>
            </ul>
            <ul className="github area">
              <h3>Código Fonte</h3>
              <p className="version">
                <a href="https://github.com/gabrielSantosLima/sep">
                  <DiGithubFull size={40}/>
                </a>
              </p>
            </ul>
          </Info>
          <h2> Equipe de desenvolvimento</h2>
          <div className="developers">
            <CardDev>
              <div className="image">
                <img src="https://github.com/gabrielSantosLima.png" alt="Gabriel Lima"/>
              </div>
              <ul>
                <li id="name">
                  Gabriel dos Santos Lima
                </li>
                <li id="desc">
                  Técnico em Informática e programador Web e Mobile.
                </li>
                <li id="git">
                  <a href="https://github.com/gabrielSantosLima">
                    <AiFillGithub size={30}/>
                  </a>
                </li>
              </ul>
            </CardDev>
            <CardDev>
              <div className="image"><img src="https://github.com/melinnediniz.png" alt="Melinne Diniz"/></div>
              <ul>
                <li id="name">
                  Melinne Diniz de Oliveira
                </li>
                <li id="desc">
                  Técnico em Informática e programador Web e Mobile.
                </li>
                <li id="git">
                  <a href="https://github.com/melinnediniz">
                    <AiFillGithub size={30}/>
                  </a>
                </li>
              </ul>
            </CardDev>
          </div>
        </Main>
        <Footer />
      </ContainerMain>
    </Container>
  );
}

export default Sobre;