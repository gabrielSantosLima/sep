import React from 'react';
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TreeBar from '../../components/TreeBar';

import { Container } from './styles';

const Homepage = () => {
  return (
    <Container>
      <Header isLogin={true} />
      <TreeBar>
        <li><Link to="/home">Tela Inicial</Link></li>
      </TreeBar>
      
      <Footer />
    </Container>
  );
}

export default Homepage;