import React, { Component } from 'react'

// Estilização
import { Container, Sair } from './styles'

//Icons
import { BsPersonSquare } from 'react-icons/bs'
import { GrDocumentText } from 'react-icons/gr'
import { GiDiploma } from 'react-icons/gi'
import { FaTable } from 'react-icons/fa'
import { BiExit } from 'react-icons/bi'

class Menu extends Component{
  render(){
    return(
    <Container>
         <ul>
            <li>
              <BsPersonSquare size={20}/> <p>Perfil</p>
            </li>
            <li>
               <GrDocumentText size={20}/> <p>Documentos</p>
            </li>
            <li>
            <GiDiploma size={20}/> <p>Certificados</p>
            </li>
            <li>
            <FaTable size={20}/> <p>Bancas</p>
            </li>
         </ul>

         <Sair>
         <BiExit size={20}/> <p>Sair</p>
            </Sair>
    </Container>
    )
  }
}

export default Menu