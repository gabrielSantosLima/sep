import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  margin-top: 0;
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--color-container);

  :first-child{
    margin-top: 10px;
  }
`
