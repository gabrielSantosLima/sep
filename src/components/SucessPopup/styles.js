import styled, { keyframes } from 'styled-components';

const animacao = keyframes`
    0%{
        transform: translateY(-100%);
    }
    50%{
        transform: translateY(0%);
    }
    100%{
        transform: translateY(-100%);
    }
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: var(--color-sucess); 
  width: 100vw;
  height: 40px;
  display: flex;
  padding: 8px;
  animation: ${animacao};
  animation-duration: 4s;
  animation-fill-mode: forwards;

  span {
      display: flex;
      flex: 1;
      font-weight: bold;
      color: white;
      font-size: 1.4rem;
      justify-content: flex-start;
      align-items: center;
  }
`;
