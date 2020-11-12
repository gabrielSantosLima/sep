import styled from 'styled-components';

export const Container = styled.ul`
    list-style: none;
    color: var(--color-treebar-font);
    display: flex;
    background: var(--color-treebar-background);
    padding: 8px;

    li{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        
        :not(:last-child)::after{
            content: ">";
            margin: 0 4px;
        }    
    }
    
`;
