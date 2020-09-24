import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TreeBar from '../../components/TreeBar';

import { Container } from './styles';

const Homepage = () => {
  return (
    <Container>
      <Header isLogin={true} />
      <TreeBar>
        <li>Tela Inicial</li>
      </TreeBar>
      
      <Footer />
    </Container>
  );
}

export default Homepage;