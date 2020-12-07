import styled from 'styled-components';

export const Container = styled.div`
`;

export const ButtonConfirm = styled.button`
    color: white;
    padding: 8px;
    margin: 8px;
    background-color: var(--color-confirm)
`

export const ButtonDelete = styled.button`
    color: var(--color-cancel);
    padding: 8px;
    margin: 8px;
    border: 1px solid var(--color-cancel)
`

export const Button = styled.button`
    margin: 8px;
    padding: 8px;
`

export const ButtonList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`