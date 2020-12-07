import React from 'react'
import { Link } from 'react-router-dom'
import { FiPaperclip, FiDownload} from 'react-icons/fi'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TreeBar from '../../components/TreeBar'
import ContainerMain from '../../components/ContainerMain'
import DownloadTable, { DownloadItem } from '../../components/DownloadTable'
import Main from '../../components/Main'
import Title from '../../components/Title'

import { Container } from './styles'


const Certificados = ()=> {
    return(
    <Container>
      <ContainerMain>
        <Header isLogin={true}/>
        <TreeBar>
          <li><Link to="/home">Tela Inicial</Link></li>
          <li><Link to="/certificados">Certificados</Link></li>
        </TreeBar>
        <Title>Certificados</Title>
        <Main>
          <DownloadTable>
            <DownloadItem>
              <FiPaperclip size={20}/>
              <span>Ata de relatório</span>
              <FiDownload className="download" size={20}/>
            </DownloadItem>
          </DownloadTable>
        </Main>
        <Footer/>
      </ContainerMain>
    </Container>
  )
}

export default Certificados