import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Homepage from './pages/Homepage';
import EstagioDescricao from './pages/EstagioDescricao';
import ProjetoDescricao from './pages/ProjetoDescricao';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={ Login } path={ ["/", "/login"] } exact/>
      <Route component={ Cadastro } path="/cadastro" exact/>
      <Route component={ Homepage } path="/home" exact/>
      <Route component={ EstagioDescricao } path="/home/estagio"/>
      <Route component={ ProjetoDescricao } path="/home/projeto"/>
    </BrowserRouter>
  );
}

export default Routes;