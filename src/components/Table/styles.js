import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;

    nav ul{
        height: 30px;
        display: flex;
        flex-direction: row;
        
        .selected{
            background-color: var(--color-nav-estagio-selected);
            color: var(--color-font-nav-estagio-selected);
        }
    }

    nav ul li{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        max-width: 300px;
        height: 100%;
        font-weight: bold;
        user-select: none;
        cursor: pointer;
        background-color: var(--color-nav-estagio);
        color: var(--color-font-nav-estagio);
        font-size: 1.4rem;
        transition: .4s;
        
        :first-child{
            border-top-left-radius: 8px;
        }
        
        :last-child{
            border-top-right-radius: 8px;
        }
        
        :hover{
            filter: brightness(90%);
        }
    }

    > div {
        flex: 1;
    }
`;
