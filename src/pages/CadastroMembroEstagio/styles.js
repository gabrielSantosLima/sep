import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 80%;
    height: 100%;
    margin: 0 auto;
`;

export const Title = styled.h1`
    background: #62A6CD;
    margin-top: 10px;
    font-size: 22px;
    padding: 10px;
    text-align: center;
    color: white;
`;

export const Content = styled.div`
    width: 60%;
    height: 60%;
    margin: 0 auto;
    margin-bottom: 15px;


    form{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;



    label{
        display: flex;
        flex-direction: column;
        width: 260px;
        font-weight: bold;
        margin: 0 20px 0 20px; 

        div{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        
        select, input{
            height: 22px;
            outline: none;
            border: 2px solid rgb(223, 223, 223);
            background: rgb(245, 245, 245);
            margin-bottom: 10px;
            font-size: 14px;
            text-align: center;
        }

        p{
            font-size: 13px;
        }
    }
        
    }
`

export const Select = styled.input`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Radio = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 20px;
`

export const Botoes = styled.div`
    padding: 20px;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
`
