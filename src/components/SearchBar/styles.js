import styled from 'styled-components'

export const Head = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;
    width: 100%;
    background-color: #026F9D;

    input{
        height: 27px;
        width: 22%;
        border-radius: 5px 0 0 5px;
        border: none;
        margin-left: 10%;
        background: #C4C4C4;
        font-weight: bold;
        padding-left: 12px;
        box-shadow: inset 0 0 0.5em #969696;

    }

    button{
        height: 27px;
        background-color: #ddd;
        border: none;
        cursor: pointer;
    }
`

export const Logo = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    background-color: #5A6B86;
    margin-left:auto;
    width:18%;
    height:45px;

    .more{
        background: #076187;
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo-icon{
        display: flex;
        align-items: center;
        justify-content: center;
    }

`
