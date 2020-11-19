import styled from 'styled-components';

export const Container = styled.div`
  h5{
    margin: 10px 0;
    text-align: center;
    font-size: 16px;
    color:  rgb(9, 9, 82);
    background-color: rgba(0, 60, 255, 0.15);
    padding: 5px;
  }
`;

export const Form = styled.form`
  margin-bottom: 30px;

  .form-group{
      display: flex;
      flex-direction: column;
      margin: auto;
      text-align: center;
      width: 65%;
      border: 2px solid rgba(1, 111, 184, 0.438);
      box-shadow: 0px 0px 2px 2px  rgba(3, 51, 139, 0.164);
  }

  /* DADOS DO DISCENTE*/
  .titulo{
      margin-bottom: 20px;
      font-size: 20px;
      color: white;
      background-color: #186dbd;
  }

  /* NOME CPF ETC*/
  .nomes{
      align-self: flex-start;
      margin-left: 50px;
      margin-top: 5px;
      font-size: 14px;
  }

  /* INPUT GERAL*/
  .form-control{
      width: 40%;
      padding: 5px;
      padding-left: 10px;
      margin-bottom: 7px;
      margin-left: 50px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgba(128, 128, 128, 0.801);
      font-size: 14px;
      color: black;
  }

  small{
      font-size: 10px;
      margin-left: -67px;
      margin-top: -5px;
  }

  /* .form-control.ok{
      box-shadow: 0 0 1px 1px green;
      
  }

  .form-control.erro{
      box-shadow: 0 0 1px 1px red;
      
  } */

  /* DIV BOTÕES*/
  .align-btn{
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
  }

  .btn{
      padding: 8px;
      padding-left: 20px;
      padding-right: 20px;
      margin-top: 10px;
      margin-left: 5px;

      border: none;
      outline: none;
      cursor: pointer;
      transition: 0.7s;

      font-size: 15px;

      border-radius: 5px;
      box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);

  }

  .entrar{
      color: white;
      background: #1F6AA0;
  }

  .cancel{
      background-color: rgba(158, 159, 161, 0.671);
  }

  .entrar:hover{
      background-color: #143c58;
  }

  .cancel:hover{
      background-color: rgb(176, 190, 197);
  }

`;
