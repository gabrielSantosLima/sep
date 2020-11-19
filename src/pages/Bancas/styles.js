import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  margin-top: 0;
  width: 75%;
  display: flex;
  flex-direction: column;

  h1{
    background: var(--color-background-title);
    margin-top: 3%;
    font-size: 2.3rem;
    padding: 5px;
    text-align: center;
    color: white;
  }
`

 

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-container);

  :first-child{
    margin-top: 10px;
  }
`

export const TableBancas = styled.div`
align-self: center;
border: 1px solid var( --color-body);
margin: 4% 0 4% 0;
height: 400px;
overflow-y: scroll;

    thead{
        border: 1px solid var(--color-border-table);
    }

    
    th{
        font-size: 1.4rem; 
        position: sticky;
        top: 0;
        background-color: var(--color-title-table);
    }
    td{
        font-size: 1.1rem;
    }

    tr td:nth-child(3){
        width: 70px;
        font-size: 1rem;
    }

    tr td:nth-child(4){
        width: 120px;
    }

    tr td:nth-child(7){
        width: 200px;
    }

    table, th, td{
        text-align: center;
        padding: 8px 15px 8px 15px;
      //  border: 1px solid var(--color-border-table);
    //   border-collapse: collapse;
       
       ul{
           list-style: none;
       }
    }
    

`