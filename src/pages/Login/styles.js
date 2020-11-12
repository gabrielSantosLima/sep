import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  margin-top: 0;
  width: 75%;
  background-color: var(--color-container);
  
  display: flex;
  flex-direction: column;

  label{
    margin-top:40px;
    margin-bottom: 30px;
    font-size: 26px;
    color: #183550;
  }

  .link{
    font-size: 11pt;
    margin-bottom: -10px;
    padding-top: 0px;
    margin-top: 10px; 
    color: var(--color-login-link);
  }

  .text{
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;

    > a{
      text-align: center;
      text-decoration: none;
      color: #393dac;
      transition: 0.7s;
      
      :hover{
        color: rgb(13, 112, 179);     
      }
    }
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .box{
    background-color: #b6c8d83b;
    margin-right: 2px;
    margin-left: 2px;
    text-align: center;
    width: 150px;
    transition: 0.9s;
    margin: 8px;
    padding: 3px;

    :hover{
      background-color: #ffd48588;
    }

    > a{
      display: flex;
      flex-direction: column;
      
      p{
        margin-top: 10px;
      }
    }
  }

  p{
    font-size: 13px;
  }

`;

export const Form = styled.form`
  
  margin: 30px;

  .btn, .form-group{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center; 
  }

  .form-control{
    width: 230px;
    padding: 9px;
    padding-left: 15px;
    margin-bottom: 16px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgba(128, 128, 128, 0.801);
    font-size: 14px;
  }

  button{
    padding: 8px 30px;
    margin-top: 10px;  
    background: #1F6AA0;
    color: white;
    font-size: 15px;
    letter-spacing: 1px;
    
    border-radius: 5px;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
    transition: 0.7s;

    :hover{
      background-color: #143c58;
    }
  }
`; 