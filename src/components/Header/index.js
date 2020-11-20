import React from 'react';
import { FiUser, FiFileText, FiGitBranch, FiLogOut, FiHome } from 'react-icons/fi'
import { GoBookmark } from 'react-icons/go'

import { Container } from './styles';

const Header = ( props ) => {
  return (
    <Container className="header">
      <div className="main">
        SEP - SISTEMA DE ESTÁGIO E PROJETO
      </div>
      {
        props.isLogin &&
        <ul className="nav">
          <li className="left">
            <ul className="sub-nav">
              <li className="nav-item">
                <FiHome />
              </li>
              <li className="nav-item">
                <FiUser />
                Perfil    
              </li>
              <li className="nav-item">
                <FiGitBranch />
                Bancas
              </li>
              <li className="nav-item">
                <GoBookmark />
                Certificados
              </li>
            </ul>
          </li>
          <li className="right">
            <ul className="sub-nav">
              <li className="nav-item change-font">
                A+
              </li>
              <li className="nav-item change-font">
                A-
              </li>
              <li className="nav-item">
                <FiLogOut />
                Sair
              </li>
            </ul>
          </li>
        </ul>
      }

    </Container>
  );
}

export default Header;