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

      <Title> Cadastrar membro do Estágio</Title>
           <Guias />
      <Title>Equipe de Estágio</Title>
      <MembersTable />

      <Footer />
      </Container>

    )
  }




