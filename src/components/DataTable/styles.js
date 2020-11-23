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
    border: 1px solid var( --color-body);
    margin: 8px 0px;
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
