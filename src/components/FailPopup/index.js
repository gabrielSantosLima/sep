import React from 'react';

import { Container } from './styles';

const FailPopup = ({ message = "Falha no processo! Tente Novamente!" }) => {
return <Container><span>{message}</span></Container>
}

export default FailPopup;