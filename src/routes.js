import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Bancas from './pages/Bancas'
import Certificados from './pages/Certificados'
import Sobre from './pages/Sobre';
import EstagioDescricao from './pages/EstagioDescricao';
import ProjetoDescricao from './pages/ProjetoDescricao';
import BancaDescricao from './pages/BancaDescricao';
import ConfirmaBanca from './pages/ConfirmaBanca';
import CadastroProjeto from './pages/CadastroProjeto';
import CadastroEstagio from './pages/CadastroEstagio';
import CadastroBanca from './pages/CadastroBanca';
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={ Login } path={["/", "/login"]} exact/>
        <Route component={ Homepage } path="/home" exact/>
        <Route component={ EstagioDescricao } path="/descricao-estagio/:id" exact/>
        <Route component={ CadastroEstagio } path="/cadastro-estagio" exact/>
        <Route component={ ProjetoDescricao } path="/descricao-projeto/:id"/>
        <Route component={ CadastroProjeto } path="/cadastro-projeto" exact/>
        <Route component={ Bancas } path="/bancas" exact/>
        <Route component={ CadastroBanca } path="/cadastro-banca" exact/>
        <Route component={ BancaDescricao } path="/descricao-banca/:id" exact/>
        <Route component={ Certificados } path="/certificados" exact/>
        <Route component={ Sobre } path="/sobre" exact />
        <Route component={ ConfirmaBanca } path="/confirmar-banca/:id" exact />
        <Route component={ PaginaNaoEncontrada } path="*"/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;