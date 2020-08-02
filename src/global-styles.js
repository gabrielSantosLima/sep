import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  html,body,div{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button{
    outline: none;
  }
`

export default GlobalStyle;