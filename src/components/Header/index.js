import React from 'react';
import { Link } from 'react-router-dom'
import { FiUser, FiGitBranch, FiLogOut, FiHome } from 'react-icons/fi'
import { GoBookmark } from 'react-icons/go'

import { Container } from './styles';

const Header = ( {isLogin} ) => {
  return (
    <Container className="header">
      <div className="main">
        SEP - SISTEMA DE ESTÁGIO E PCCT
      </div>
      {
        isLogin &&
        <ul className="nav">
          <li className="left">
            <ul className="sub-nav">
              <li className="nav-item">
                <Link to="/home"><FiHome /></Link>
              </li>
              <li className="nav-item">
                <FiUser />
                <Link to="/perfil">Perfil</Link>    
              </li>
              <li className="nav-item">
                <FiGitBranch />
                <Link to="/bancas">Bancas</Link>
              </li>
              <li className="nav-item">
                <GoBookmark />
                <Link to="/certificados">Certificados</Link>
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