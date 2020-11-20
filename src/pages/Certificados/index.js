import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2, FiPaperclip, FiDownload } from 'react-icons/fi'
import { FaRegEdit } from 'react-icons/fa'


import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TreeBar from '../../components/TreeBar'
import ContainerMain from '../../components/ContainerMain'
import Main from '../../components/Main'

import { Container, TableDocuments } from './styles'


const Certificados = ()=> {
    return(
        <Container>
        <ContainerMain>
          <Header isLogin={true}/>
      <TreeBar>
        <li><Link to="/home">Tela Inicial</Link></li>
        <li><Link to="/certificados">Certificados</Link></li>
      </TreeBar>

      <Main>
      <h1>Certificados</h1>

    <TableDocuments>
        <div className="documento">
              <FiPaperclip size={20}/>
              <span>Certificado - Banca 21/12/2020</span>
              <FaRegEdit className="download" size={20}/>
            </div>  
    </TableDocuments>
      </Main>
      <Footer/>
      </ContainerMain>
        </Container>
    )
}

export default Certificados