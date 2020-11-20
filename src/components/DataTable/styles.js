import styled from 'styled-components';

export const Container = styled.table`
    border: 1px solid var( --color-body);
    margin: 8px 0px;
    width: 80%;
    
    th{
        font-size: 1.4rem;
        top: 0;
        background-color: var(--color-title-table);
    }
    td{
        font-size: 1.1rem;
    }
    
    th, td{
        text-align: center;
        padding: 8px 15px 8px 15px;
    }
`;
