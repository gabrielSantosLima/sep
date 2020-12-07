import React, { useState } from 'react';
import { MdClose } from 'react-icons/md'

import { Container, ContainerContent, ContainerMessage, ContainerButton } from './styles';

const ConfirmContainer = ({
    isVisibility = true, 
    message = "Você deseja continuar?", 
    response, 
    onEndConfirm
}) => {
  const [ visibility, setVisibility ] = useState(isVisibility);

  function close(){
    setVisibility(false)
    onEndConfirm()
  }
  
  function handleOnConfirm(){
    response(true)
    close()
    onEndConfirm()
  }
  
  function handleOnCancel(){
    response(false)
    close()
    onEndConfirm()
  }

  if(!visibility) return <></>

  return(
    <Container>
        <ContainerContent>
          <MdClose id="closeButton" size={25} onClick={close}/>
          <ContainerMessage>
            <h1>{message}</h1>
          </ContainerMessage>
          <ContainerButton>
            <button id="cancel" onClick={handleOnCancel}>Cancelar</button>
            <button id="confirm" onClick={handleOnConfirm}>Confirmar</button>
          </ContainerButton>
        </ContainerContent>
    </Container>
  );
}

export default ConfirmContainer;
