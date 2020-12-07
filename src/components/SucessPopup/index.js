import React from 'react';

import { Container } from './styles';

const SucessPopup = ({ message = "Realizado com sucesso!" }) => {
return <Container><span>{message}</span></Container>
}

export default SucessPopup;