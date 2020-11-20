import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-container);

  :first-child{
    margin-top: 10px;
  }
`;
