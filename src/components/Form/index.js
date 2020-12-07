import React from 'react';
import { useState } from 'react';

import { Container } from './styles';
import ConfirmContainer from './../ConfirmContainer'

const Form = ({ 
    callback, 
    children = [], 
    canEditable = true, 
    hasConfirmation = true,
    hasCancelButton = false,
    messageCancelButton = "Cancelar",
    messageConfirmationButton = "Salvar"
}) => {
    const [ isConfirmVisibility, setIsConfirmVisibility ] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        if(!hasConfirmation) {
            callback()
            return
        }
        setIsConfirmVisibility(true)
    }

    function handleConfirm(resp){
        alert(resp)
        if(!resp) return
        callback()
    }

    return(
        <Container isEditable={canEditable}>
            { isConfirmVisibility && (
                <ConfirmContainer 
                    response={handleConfirm} 
                    onEndConfirm={() => setIsConfirmVisibility(false)}
                />
            )}
            { children }
            {
                canEditable && (
                    <FormGroup>
                        { hasCancelButton && (
                            <button id="cancel">
                                {messageCancelButton}
                            </button>
                        )}
                        <button onClick={handleSubmit} id="confirm">
                            {messageConfirmationButton}
                        </button>
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