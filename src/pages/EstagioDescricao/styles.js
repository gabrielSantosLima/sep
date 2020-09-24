import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  margin-top: 0;
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-container);
`

export const Box = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;

  nav{
    display: flex;
    align-items: center;
    justify-content: start;
    min-height: 30px;
    flex: 1;
  }

  nav ul{
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: row;
    list-style: none;
    
    .selected{
      background-color: var(--color-nav-estagio-selected);
      color: var(--color-font-nav-estagio-selected);
    }
  }
  
  nav ul li{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100%;
    cursor: pointer;
    background-color: var(--color-nav-estagio);
    color: var(--color-font-nav-estagio);
    font-size: 1.4rem;

    :first-child{
      border-radius: 8px 0 0;
    }
    
    :last-child{
      border-radius: 0 8px 0 0;
    }
  }

  form{
    flex: 10;
    border: 0.5px solid;
    border-color: var(--color-border);
    display: flex;
    flex-wrap: wrap;

    .form-group{
      width: 50%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      label{
        font-size: 1.4rem;
        width: 50%;
        display: flex;
        align-items: center;
        font-weight: bold;
        margin-bottom: 8px;

        *{
          margin-right: 2px;
        }
      }
      
      input{
        background: var(--color-textfield);
        width: 60%;
        height: 34px;
        margin-left: 8px;
        padding: 8px;
      }

      :last-child{
        flex-direction: initial;
        width: 100%;
        padding: 0 30%;
        justify-content: space-around;
      }

      button{
        font-size: 1.4rem;
        width: 100px;
        height: 30px;
      }

      #salvar{
        color: #FFF;
        background: var(--color-confirm);
      }
      
      #cancelar{
        background: var(--color-textfield);
      }
    }
    
  }
`