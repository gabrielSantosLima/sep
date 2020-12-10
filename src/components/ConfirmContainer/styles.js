import styled, { keyframes } from 'styled-components';

const init = keyframes`
    0%{
        transform: scale(0.9);
    }
    100%{
        transform: scale(1);
    }
`

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerContent = styled.div`
    width: 40%;
    min-height: 30%;
    padding: 8px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-container);
    animation: ${init};
    animation-duration: .4s;
    animation-fill-mode: backwards; 

    #closeButton{
        align-self: flex-end;
        margin: 8px;
    }
`;

export const ContainerMessage = styled.div`
    flex: 1;

    h1{
        text-align: center;
    }
`;

export const ContainerButton = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        margin: 8px;
        padding: 8px 30px;
    }

    #confirm{
        color: white;
        background-color: var(--color-confirm);
    }
    #cancel{
        color: red;
        border: 1px solid var(--color-cancel);
    }
`;
