import styled from 'styled-components';

export const Container = styled.header`
    li{
        user-select: none;
    }

    .main{
        background-color: var(--color-header-sep-bar);
        padding: 10px;
        color: white;
        font-size: 1.2rem;
    }

    .nav{
        font-size: 1.4rem;
        list-style: none;
        display: flex;
        width: 100%;
        height: 40px;
        background-color: var(--color-header-nav);

        .left{
            flex: 3;
        }
        .right{
            flex: 1;

            .change-font{
                font-weight: bold;
                font-size: 1.6rem;
            }
        }
        
        .sub-nav{
            width: 100%;
            height: 100%;
            align-items: center;
            display: flex;
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