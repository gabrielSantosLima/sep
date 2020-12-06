import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Perfil from './pages/Perfil';
import CadastroDiscente from './pages/CadastroDiscente';
import CadastroProfessor from './pages/CadastroProfessor';
import CadastroCoordenadora from './pages/CadastroCoordenadora';
import Homepage from './pages/Homepage';
import EstagioDescricao from './pages/EstagioDescricao';
import ProjetoDescricao from './pages/ProjetoDescricao';
import Bancas from './pages/Bancas'
import Certificados from './pages/Certificados'
import CadastroProjeto from './pages/CadastroProjeto';
import CadastroEstagio from './pages/CadastroEstagio';
import CadastroBanca from './pages/CadastroBanca';
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada';
import Sobre from './pages/Sobre';
import ConfirmaBanca from './pages/ConfirmaBanca';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={ Login } path={["/", "/login"]} exact/>
        <Route component={ Perfil } path={"/perfil"} exact/>
        <Route component={ Homepage } path="/home" exact/>
        <Route component={ CadastroDiscente } path="/cadastro-discente" exact/>
        <Route component={ CadastroProfessor } path="/cadastro-professor" exact/>
        <Route component={ CadastroCoordenadora } path="/cadastro-coordenadora" exact/>
        <Route component={ EstagioDescricao } path="/estagios" exact/>
        <Route component={ CadastroEstagio } path="/cadastro-estagio" exact/>
        <Route component={ ProjetoDescricao } path="/projetos"/>
        <Route component={ CadastroProjeto } path="/cadastro-projeto" exact/>
        <Route component={ Bancas } path="/bancas" exact/>
        <Route component={ CadastroBanca } path="/cadastro-banca" exact/>
        <Route component={ Certificados } path="/certificados" exact/>
        <Route component={ Sobre } path="/sobre" exact />
        <Route component={ ConfirmaBanca } path="/confirma-banca" exact />
        <Route component={ PaginaNaoEncontrada }/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;