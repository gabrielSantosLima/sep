import styled from 'styled-components';

export const Container = styled.div`
    main{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 3;
    height: 100%;
`;

export const Right = styled.div`
    background: var(--color-profile-container);
    flex: 1;
    height: 80vh;
    max-height: 200vh;

    ul{
        display: flex;
        flex-direction: column;
        align-self: center;
        padding: 8px;

        li{
            margin: 2px;
        }

        label,span{
            font-size: 1.4rem;
        }

        label{
            font-weight: bold;
        }

        span{
            
        }
    }
`;

export const UserIcon = styled.div`
    margin: 8px auto;
    width: 150px;
    height: 150px;
    background-color: var(--color-profile-user-icon);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    ::after{
        font-weight: bold;
        font-size: 6.4rem;
        content: "${props => props.letter || "SEP"}";
    }
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