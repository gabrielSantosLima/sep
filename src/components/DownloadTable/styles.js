import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 8px;
    min-height: 360px;
    max-height: 460px;
    overflow-y: auto;

    .documento{
        width: 80%;
        background: var(--color-treebar-background);
        border-radius: 2px;
        display: flex;
        align-items: center;
        margin-top: 4px;
        padding: 8px;

        span{
            margin-left: 8px;
            margin-right: auto;
            font-size: 1.4rem;
            font-weight: bold;
        }

        .download{
            transition: .2s;
            cursor: pointer;
        
            :hover{
                filter: brightness(90%);
            }
        }
    }
`;
