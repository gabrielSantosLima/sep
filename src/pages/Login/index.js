import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './../../components/Footer'
import Header from './../../components/Header'
import ContainerMain from '../../components/ContainerMain'

import { Container, Main, FormLogin } from './styles';

const Login = () => {
  
  function handleLogin(event){
    event.preventDefault();
    console.log("Logado")
  }
    return (
    <Container>
      <ContainerMain isLogin={true}>
        <Header />
    
        <Main>
          <div className="box" id="aluno">
            <a href="/">
                <h6 className="link">
                    Aluno(a)
                </h6>
                <p>
                    (Discente)
                </p>
            </a>
          </div> 
        
          <div className="box" id="aluno">
            <a href="/">
                <h6 className="link">
                    Coordenador(a)
                </h6>
                <p>
                    (Discente)
                </p>
            </a>
          </div>       
        
          <div className="box" id="prof">
            <a href="/">
                <h6 className="link">
                    Professor(a)
                </h6>
                <p>
                    (Docente)
                </p>
            </a>
          </div>
        </Main>

        <h5 className="text">
            Esqueceu o Login?
            <Link to="/" className="recover">
                Clique aqui.
            </Link>
        </h5>
        
        <FormLogin onSubmit={handleLogin}>
          <div className="form-group">
              <label>Entrar no Sistema</label>
              
              <input 
                type="email" 
                className="form-control" 
                id="login" 
                placeholder="E-mail" 
              />
              
              <input 
                type="password" 
                className="form-control" 
                id="senha" 
                placeholder="Matrícula" 
              />
              <button type="submit" className="btn">Entrar</button>
          </div> 
        </FormLogin>

        <Footer />
      </ContainerMain>
    </Container>
  );
}

export default Login;