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
        width: 100%;
        height: 40px;
        background-color: var(--color-header-nav);
        
        .left{
            display: flex;
            align-items: center;
            flex: 2;
        }
        .right{
            padding-right: 30px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex: 1;

            .change-font{
                font-weight: bold;
                font-size: 1.6rem;
            }
        }

        .nav-item{
            align-items: center;
            justify-content: center;
            margin-left: 30px;
            cursor: pointer;

            *{
                margin-right: 5px;
            }
        }

    }
`;
