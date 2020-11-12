import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  :root{
    /*  
    Colocar depois como font-size: 1.4rem
    Fontes: 1px = 0.75pt / 16px = 12pt  
    */
    font-size: 62.5%;

   --color-header-nav: #F5E2D2;
   --color-footer: #027DC5; 
   --color-body: #C4C4C4; 
   --color-container: #FFFFFF;
   --color-login-box: #b6c8d83b; 
   --color-login-box-hover: #ffd48588; 
   --color-login-link: #19068B;
   --color-nav-estagio: #C4C4C4;
   --color-font-nav-estagio: #414A50;
   --color-nav-estagio-selected: #0C90C8;
   --color-font-nav-estagio-selected: #FFFFFF;
   --color-textfield: #F3F3F3;
   --color-confirm: #28B850; 
   --color-treebar-background: #D8E0E4;
   --color-treebar-font: #2267B8;
  }

  html,body, #root{
    width: 100%;
    height: 100%;
  }

  *, button, input{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    border: 0;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background-color: var(--color-body)
  }

  a {
    text-decoration: none;
  }

  button{
    cursor: pointer;
    border: 0;
    transition: .4s;
  }
  
  button:hover{
    filter: brightness(80%);
  }
`

export const Container = styled.div`
  margin: auto;
  margin-top: 0;
  width: 75%;
`;

export default GlobalStyle;