import styled from 'styled-components';

const isScrolled = `
    tbody{
        display: block;
        max-height: 360px;
        overflow-y: auto;
    }

    thead, tbody tr {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
`;

export const Container = styled.table`  
    box-shadow: ${props=> props.hasBorder && "0.2px 0.2px 2px 0px rgba(0,0,0,0.4);"};
    width: ${props => props.isFullWidth ? "100%" : "80%"};
    
    ${props => props.isScrolled ? isScrolled : ""}
    th{
        font-size: 1.4rem;
        background-color: var(--color-title-table);
    }
    td{
        font-size: 1.2rem;
    }

    th, td{
        text-align: center;
        padding: 8px 15px 8px 15px;
    }
`;
