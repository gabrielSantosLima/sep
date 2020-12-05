import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import FontProvider from './context/FontProvider'

ReactDOM.render(
  <React.StrictMode>
    <FontProvider>
      <App />
    </FontProvider>
  </React.StrictMode>,
  document.getElementById('root')
);