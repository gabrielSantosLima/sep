import styled from 'styled-components';

export const Container = styled.header`
    
    .main{
        background-color: #027DC5;
        padding:10px;
        color: white;
        font-size: 11pt;
    }

    .nav{
        font-size: 1.4rem;
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 40px;
        background-color: var(--color-header-nav);

        .nav-item{
            align-items: center;
            justify-content: center;
            margin-left: 30px;
            cursor: pointer;

            *{
                margin-right: 5px;
            }
        }
        .nav-item:last-child{
            margin: 0 30px 0 auto;
        }
    }
`;
