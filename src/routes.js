import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Homepage from './pages/Homepage';
import EstagioDescricao from './pages/EstagioDescricao';
import ProjetoDescricao from './pages/ProjetoDescricao';
import CadastroMembroProjeto from './pages/CadastroMembroProjeto';
import CadastroMembroEstagio from './pages/CadastroMembroEstagio';
import Erro from './pages/Erro';


const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route component={ Login } path={ ["/", "/login"] } exact/>
      <Route component={ Cadastro } path="/cadastro" exact/>
      <Route component={ Homepage } path="/home" exact/>
      
      <Route component={ EstagioDescricao } path="/home/estagio/descricao" exact/>
      <Route component={ CadastroMembroEstagio } path="/home/estagio/CadastrarMembro" exact/>

      <Route component={ ProjetoDescricao } path="/home/projeto/descricao" exact/>
      <Route component={ CadastroMembroProjeto } path="/home/projeto/CadastrarMembro" exact/>
      
      <Route component={ Erro } path="*"/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;