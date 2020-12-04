import React, { useContext } from 'react';

import { FontContext } from './context/FontProvider'

import GlobalStyle from './global-styles';
import Routes from './routes'

const App = () => {
  const { font } = useContext(FontContext)

  return(
    <>
      <GlobalStyle fontSize={font}/>
      <Routes />
    </>
  );
}

export default App;
