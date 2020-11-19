import styled from 'styled-components';

export const Container = styled.div`
  .table{    
    form{
      flex: 1;
      display: flex;
      flex-wrap: wrap;

      .form-group{
        width: 50%;
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
  }
`;