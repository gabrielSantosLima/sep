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
  justify-content: center;
  background-color: var(--color-container);

  :first-child{
    margin-top: 10px;
  }
`

export const Box = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  nav{
    flex: 1;
  }

  nav ul{
    height: 30px;
    display: flex;
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
    transition: .4s;

    :first-child{
      border-radius: 8px 0 0;
    }
    
    :last-child{
      border-radius: 0 8px 0 0;
    }

    :hover{
      filter: brightness(90%);
    }
  }

  form{
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
  .documento{
    width: 60%;
    height: 40px;
    background: var(--color-treebar-background);
    border-radius: 2px;
    display: flex;
    align-items: center;
    margin: 8px;
    padding: 8px;

    span{
      margin-left: 8px;
      margin-right: auto;
      font-size: 1.4rem;
      font-weight: bold;
    }

    .download{
      transition: .2s;
      cursor: pointer;
    
      :hover{
        filter: brightness(90%);
      }
    }

  }

  .participantes, .bancas{
    flex: 1;
    width: 100%;
    display: flex;

    table{
      flex: 1;
      padding: 30px;
      
      tr{
        th{
          font-size: 1.4rem;
          height: 30px;
        }
        td{
          height: 60px;
          text-align: center;
          font-size: 1.4rem;

          ul{
            list-style: none;
          }
        }
      }
    }
  }
`

export const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0.2px 0.2px 2px 0px rgba(0,0,0,0.4);
`