import React from 'react';

import { Container } from './styles';

const Form = ({ children = [], canEditable = true}) => {
    return(
        <Container>
            { children }
            {
                canEditable && (
                <FormGroup>
                    <button id="cancelar">Cancelar</button>
                    <button id="salvar">Salvar</button>
                </FormGroup>
            )
            }
        </Container>
    );
}

export default Form;

export const FormGroup = ({ children }) => {
    return <div className="form-group"> { children } </div> 
}