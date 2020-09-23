import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    align-items: center;
    padding-left: 20px;   
    width: 100%;
    height: 40px;
    background: #F5E1D2;

    p{
        padding-left: 5px;
    }

    ul{
        display:flex;
        flex-direction: row;
        align-items: center;
        margin: 0;
        padding: 0;
        li{
            display:flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            list-style: none;
            width: 150px;
            height: 40px;
            cursor: pointer;
        }
    }
`

export const Sair = styled.div`
    margin-left:auto;
    width:150px;
    height:40px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    cursor: pointer;
`