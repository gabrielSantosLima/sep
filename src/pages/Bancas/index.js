import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TreeBar from '../../components/TreeBar'
import ContainerMain from '../../components/ContainerMain'
import Main from '../../components/Main'

import { Container, TableBancas } from './styles'


const Bancas = ()=> {
    return (
  <Container>
  <ContainerMain>
      <Header isLogin={true}/>
      <TreeBar>
        <li><Link to="/home">Tela Inicial</Link></li>
        <li><Link to="/bancas">Bancas</Link></li>
      </TreeBar>

      <Main>
        <h1> Bancas </h1>

            <TableBancas>
            <div className="bancas">
              <table>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Tipo</th>
                    <th>Curso</th>
                    <th>Local</th>
                    <th>Hora Inicial</th>
                    <th>Hora de Final</th>
                    <th>Participantes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12/01/2020</td>
                    <td>PCCT</td>
                    <td>Tecnologia em Análise e Desenvolvimento de Sistemas</td>
                    <td>Auditório Principal</td>
                    <td> - </td>
                    <td> - </td>
                    <td>
                      <ul>
                        <li>Emmerson Santa Rita</li>
                        <li>Sarah Julia Rolim dos Santos</li>
                        <li>Neila Batista Xavier</li>
                      </ul>
                    </td>
                    <td><FiTrash2 /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            </TableBancas>
      </Main>


      <Footer />
      </ContainerMain>
    </Container>

    )
}

export default Bancas