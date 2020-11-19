import React from 'react';

import { Container, Form } from './styles';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ContainerMain from '../../components/ContainerMain';

const CadastroDiscente = () => {
  return (
    <Container>
      <ContainerMain>
        <Header />

        <h5>
          Cadastro de Discente (Aluno)
        </h5>

        <Form>
          <div class="form-group">
            <label class="titulo">Dados de Cadastro</label>
            <label for="txtname" class="nomes">Nome</label>
            <input type="text" class="form-control ok" id="txtname" placeholder="Digite aqui..."/>

            <label for="txtname" class="nomes">CPF</label>
            <input type="text" class="form-control erro" id="txtcpf" placeholder="Digite apenas os números..."/>
          
            <label for="txtname" class="nomes">Data de Nascimento</label>
            <input type="date" class="form-control" name="data" id="nasc" value="2012-12-12"/>
          
            <label for="txtname" class="nomes">Nível</label>
            <select class="form-control" name="nivel" id="nivel">
              <option value="Fundamental">Fundamental</option>
              <option value="Médio">Médio</option>
              <option value="Técnico">Técnico</option>
              <option value="Integrado">Integrado</option>
              <option value="Graduação">Graduação</option>
            </select>
          
            <label for="txtname" class="nomes">Ano/Semestre Atual</label>
            <input type="text" class="form-control" id="txtano" placeholder="Digite aqui..."/>
            <small>Ex: 2018-2</small>
            <label for="txtname" class="nomes">Email</label>
            <input type="email" class="form-control" id="txtemail" placeholder="exemplo@gmail.com"/>
          
            <label for="txtname" class="nomes">Senha</label>
            <input type="password" class="form-control" id="txtsenha" placeholder="Digite aqui..."/>

            <div class="align-btn">
              <button type="submit" class="btn entrar">Cadastrar</button>
              <button type="submit" class="btn cancel">Cancelar</button>
            </div>
          </div> 
        </Form>

        <Footer />
      </ContainerMain>
    </Container>
  );
}

export default CadastroDiscente;