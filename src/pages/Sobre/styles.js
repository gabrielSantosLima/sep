import styled from 'styled-components'

export const Container = styled.div`
    h1{
        font-size: 2.6rem;
        margin: 20px;
    }

    h2{ font-size: 2.5rem;}

    .developers{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    p{
        width: 70%;
        font-size: 1.4rem;
        text-align: justify;
    }
    main{
        a{
            color: inherit;
            text-decoration: none;
        }
    }
`

export const CardDev = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0 40px 0;
    border: 1px solid var(--color-border-carddev);
    padding: 10px;
    border-radius: 5%;

    .image, img{ 
        margin: 8px auto;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ul{
    text-align: center;

    #name{
        font-weight: 600;
        font-size: 1.4rem;
    }

    #desc{
        font-size: 1.2rem;
        padding: 2px;
        width: 220px;
    }

    }
`

export const Info = styled.ul`

    display: flex;
    flex-direction: row;
    font-size: 1.4rem;
    margin: 30px 0 30px 0;
    padding: 20px 0 10px 0;
    width: 100%;
    justify-content: space-evenly; 
    background: var(--color-background-info);

    .area p{
        text-align: center;
        font-size: 1.6rem;
    }
    .area, .version, .depto, .github{
        width: 130px;
        text-align: center;
    }

    .depto{
        align-self: center;
    }

`