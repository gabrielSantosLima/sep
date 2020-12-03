import React from 'react';
import { Link } from 'react-router-dom'

import { useFetch } from './../../services/useFetch'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ContainerMain from '../../components/ContainerMain'
import Main from '../../components/Main'
import TreeBar from '../../components/TreeBar';
import Loading from '../../components/Loading';

import { Container } from './styles';

const Homepage = () => {
  const { data, error } = useFetch('/alunos')

  if(error) return <h1>Deu capim</h1>  
  if(!data) return <Loading />  

  return (
    <Container>

      <ContainerMain>
        <Header isLogin={true} />
        <TreeBar>
          <li><Link to="/home">Tela Inicial</Link></li>
        </TreeBar>
          
        <Main>
          {
            data.map(aluno => <li key={aluno.id}>{aluno.nome}</li>)
          }
        </Main>
          
        <Footer />
      </ContainerMain>
    </Container>
  );
}

export default Homepage;