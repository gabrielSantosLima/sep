import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: ${props => props.bkColor}; 
  color: ${props => props.color};
  width: ${props => props.width}%;
  height: ${props => props.height}%;
  border-radius: 8px;

  transition: 0.4s;
  cursor: pointer;

  :hover{
    filter: brightness(70%);
  }
`;

export default Button;