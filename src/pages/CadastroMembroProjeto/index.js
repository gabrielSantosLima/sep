import React from 'react';

// Estilização
import { Container, Title } from './styles';

//Componentes
import SearchBar from '../../components/SearchBar'
import Menu from '../../components/Menu'
import Rotas from '../../components/Caminho'
import Footer from '../../components/footer'
import Guias from './Tab'
import MembersTable from './table'


export default function CadastroProjeto(){
    return(
      <Container>
      <SearchBar />  
      <Menu />
      <Rotas />

      <Title> Cadastrar membro do Projeto</Title>
           <Guias />
      <Title>Membros do Projeto</Title>
      <MembersTable />

      <Footer />
      </Container>

    )
  }




