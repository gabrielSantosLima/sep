import styled, { keyframes } from 'styled-components';

const ondulacao = keyframes`
    0%{
        transform: translateY(0px);
    }
    100%{
        transform: translateY(-20px);
    }
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Block = styled.div`
  width: 10px;
  height: 10px;
  background-color: gray;
  margin: 8px;
  animation-name: ${ondulacao};
  animation-duration: .4s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-delay: ${props => props.delay}s
`;