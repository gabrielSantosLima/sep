import React from 'react'
import { useState } from 'react'

import ConfirmContainer from './../ConfirmContainer'

import { Container } from './styles'

const ErrorButton = ({ 
    children,
    hasConfirmation = true,
    onClick 
}) => {
    const [ isConfirmVisibility, setIsConfirmVisibility ] = useState(false)

    function handleClick(){
        if(hasConfirmation){
            return setIsConfirmVisibility(true)
        }
        onClick()
    }

    function onConfirm(response){
        if(!response) return;
        onClick()
    }

    return (
        <>
            { isConfirmVisibility && (
                <ConfirmContainer 
                    response={onConfirm} 
                    onEndConfirm={() => setIsConfirmVisibility(false)}
                />
            )}
            <Container onClick={handleClick}>
                {children}
            </Container>
        </>
    )
}

export default ErrorButton;