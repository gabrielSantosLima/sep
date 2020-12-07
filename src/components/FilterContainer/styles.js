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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center; 
`;

export const ContainerContent = styled.div`
    width: 50%;
    min-height: 70%;
    padding: 8px;
    display: flex;
    border-radius: 4px;
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

export const ContainerInput = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    input, select{
        flex: 1;
        background: var(--color-textfield);
        padding: 8px;
        height: 30px;
        margin: 2px;
    }
`;

export const ContainerOutput = styled.div`
    margin-top: 8px;
`;
