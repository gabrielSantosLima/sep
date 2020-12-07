import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { FiGitBranch, FiLogOut, FiHome, FiHelpCircle } from 'react-icons/fi'
import { GoBookmark } from 'react-icons/go'

import { FontContext } from './../../context/FontProvider'

import { Container } from './styles';

const Header = ( {isLogin} ) => {
  const { nextFontSize, backFontSize } = useContext(FontContext)
  const history = useHistory()

  function handleLogout(){
    history.push('/')
  }

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
                <FiGitBranch />
                <Link to="/bancas">Bancas</Link>
              </li>
              <li className="nav-item">
                <GoBookmark />
                <Link to="/certificados">Certificados</Link>
              </li>
              <li className="nav-item">
                <FiHelpCircle />
                <Link to="/sobre">Sobre</Link>
              </li>
            </ul>
          </li>
          <li className="right">
            <ul className="sub-nav">
              <li className="nav-item change-font" onClick={nextFontSize}>
                A+
              </li>
              <li className="nav-item change-font" onClick={backFontSize}>
                A-
              </li>
              <li className="nav-item" onClick={handleLogout}>
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