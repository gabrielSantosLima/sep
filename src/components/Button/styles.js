import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: ${props => props.bkColor};
  color: ${props => props.color};
  width: ${props => props.width}%;
  height: ${props => props.height}px;
  font-size: ${props => props.fontSize}vw;
  margin: 0 5px 0 5px;
  border-radius: 8px;

  transition: 0.4s;
  cursor: pointer;

  :hover{
    filter: brightness(70%);
  }
`;

export default Button;

