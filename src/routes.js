import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import CadastroDiscente from './pages/CadastroDiscente';
import CadastroProfessor from './pages/CadastroProfessor';
import CadastroCoordenadora from './pages/CadastroCoordenadora';
import Homepage from './pages/Homepage';
import EstagioDescricao from './pages/EstagioDescricao';
import ProjetoDescricao from './pages/ProjetoDescricao';
import Bancas from './pages/Bancas'
import Certificados from './pages/Certificados'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={ Login } path={ ["/", "/login"] } exact/>
      <Route component={ CadastroDiscente } path="/cadastro-discente" exact/>
      <Route component={ CadastroProfessor } path="/cadastro-professor" exact/>
      <Route component={ CadastroCoordenadora } path="/cadastro-coordenadora" exact/>
      <Route component={ Homepage } path="/home" exact/>
      <Route component={ EstagioDescricao } path="/estagios"/>
      <Route component={ ProjetoDescricao } path="/projetos"/>
      <Route component={ Bancas } path="/bancas"/>
      <Route component={ Certificados } path="/certificados"/>
    </BrowserRouter>
  );
}

export default Routes;