import React, { useState } from 'react';
import { MdClose } from 'react-icons/md'

import { Container, ContainerContent, ContainerInput, ContainerOutput } from './styles';

const FilterContainer = ({children, isVisibility = true}) => {
  const [ visibility, setVisibility ] = useState(isVisibility);

  function close(){
    setVisibility(false)
  }

  if(!visibility) return <></>

  return(
    <Container>
        <ContainerContent>
          <MdClose id="closeButton" size={25} onClick={close}/>
          {children}
        </ContainerContent>
    </Container>
  );
}

export default FilterContainer;

export const FilterInput = ({children}) => {
    return <ContainerInput>{children}</ContainerInput>;
}

export const FilterOutput = ({children}) => {
    return <ContainerOutput>{children}</ContainerOutput>;
}