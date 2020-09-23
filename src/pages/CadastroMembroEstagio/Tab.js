import React, { useState } from 'react';

//Estilização
import { Content, Select, Radio, Botoes } from './styles';
import 'react-tabs/style/react-tabs.css';
import { Button } from '../../components/Button/styles';

//react-tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default function Guias() {    

    //Form 
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [matricula, setMatricula] = useState() //Matricula IFAM e SIAPE
    const [cpf, setCpf] = useState()
    const [funcao, setFuncao] = useState() //radio
    const [formacao, setFormacao] = useState()
    


    return(
      <Content>
        <Tabs>
          <TabList>
            <Tab>Geral</Tab>
            <Tab>Discente</Tab>
            <Tab>Docente</Tab>
            <Tab>Externo</Tab>
          </TabList>
      
          <TabPanel>
          <form>
          <label>
          Nome
      <input type="text" name="nome" />
          </label>
  
          <label>
          Matrícula
      <input type="text" name="matricula" />
          </label>
      
          <label>
          E-mail
      <input type="email" name="email" />
          </label>
   
          <label>
          CPF
      <input type="text" name="cpf" />
          </label>
  
          <label>
          Função
          <div>
          <Radio>
      <Select type="radio" name="funcao" value="coordenador" /><p>Coordenador(a) Adjunto</p>
          </Radio>
          <Radio>
      <Select type="radio" name="funcao" value="coordenador" /><p>Colaborador</p>
          </Radio>
          <Radio>
      <Select type="radio" name="funcao" value="coordenador" /><p>Orientador(a)</p>
          </Radio>
          </div>
          </label>
  
          <label>
          Formação
          <select value={'graduado'}>
            <option value="graduado">Graduado</option>
            <option value="técnico">Técnico</option>
            <option value="fundamental">Ensino Fundamental</option>
            <option value="medio">Ensino Médio</option>
          </select>
          </label>
  
        <Botoes>
        <Button type="submit" bkColor='#28B850' color="white" width="25" height="35" fontSize="1.2">Salvar</Button>
        <Button bkColor='#B6B9B7' color="white" width="25" height="35" fontSize="1.2">Cancelar</Button>
        </Botoes>
        </form>  
        </TabPanel>
  
          <TabPanel>
         <form>
          <label>
          Nome
      <input type="text" name="nome" />
          </label>
  
          <label>
          Matrícula/SIAPE
      <input type="text" name="matricula" />
          </label>
      
          <label>
          E-mail
      <input type="email" name="email" />
          </label>
   
          <label>
          CPF
      <input type="text" name="cpf" />
          </label>
  
          <label>
          Função
          <div>
          <Radio>
      <Select type="radio" name="funcao" value="coordenador" /><p>Coordenador(a) Adjunto</p>
          </Radio>
          <Radio>
      <Select type="radio" name="funcao" value="coordenador" /><p>Colaborador</p>
          </Radio>
          </div>
          </label>
  
          <label>
          Formação
          <select value={'graduado'}>
            <option value="graduado">Graduado</option>
            <option value="técnico">Técnico</option>
            <option value="fundamental">Ensino Fundamental</option>
            <option value="medio">Ensino Médio</option>
          </select>
          </label>
  
        <Botoes>
        <Button bkColor='#28B850' color="white" width="25" height="35" fontSize="1.2">Salvar</Button>
        <Button bkColor='#B6B9B7' color="white" width="25" height="35" fontSize="1.2">Cancelar</Button>
        </Botoes>
        </form>  
          </TabPanel>
          <TabPanel>
          <form>
          <label>
          Nome
      <input type="text" name="nome" />
          </label>
  
          <label>
          Matrícula
      <input type="text" name="matricula" />
          </label>
      
          <label>
          E-mail
      <input type="email" name="email" />
          </label>
   
          <label>
          CPF
      <input type="text" name="cpf" />
          </label>
  
          <label>
          Função
          <div>
          <Radio>
          </Radio>
          <Radio>
      <Select type="radio" name="funcao" value="coordenador" /><p>Colaborador</p>
          </Radio>
          </div>
          </label>
  
          <label>
          Cursando
          <select value={'graduado'}>
            <option value="graduado">Graduação</option>
            <option value="técnico-medio">Técnico Nível Médio</option>
            <option value="técnico-sub">Técnico Subsequente</option>
  
          </select>
          </label>
  
        <Botoes>
        <Button bkColor='#28B850' color="white" width="25" height="35" fontSize="1.2">Salvar</Button>
        <Button bkColor='#B6B9B7' color="white" width="25" height="35" fontSize="1.2">Cancelar</Button>
        </Botoes>
        </form>  
          </TabPanel>
          <TabPanel>
          <form>
          <label>
          Nome
      <input type="text" name="nome" />
          </label>

      
          <label>
          E-mail
      <input type="email" name="email" />
          </label>
   
          <label>
          CPF
      <input type="text" name="cpf" />
          </label>
  
          <label>
          Função
          <div>
          <Radio>
      <Select type="radio" name="funcao" value="coordenador" /><p>Coordenador(a) Adjunto</p>
          </Radio>
          <Radio>
      <Select type="radio" name="funcao" value="coordenador" /><p>Colaborador</p>
          </Radio>
          </div>
          </label>
  
          <label>
          Formação
          <select value={'graduado'}>
            <option value="graduado">Graduado</option>
            <option value="técnico">Técnico</option>
            <option value="fundamental">Ensino Fundamental</option>
            <option value="medio">Ensino Médio</option>
          </select>
          </label>
  
        <Botoes>
        <Button bkColor='#28B850' color="white" width="25" height="35" fontSize="1.2">Salvar</Button>
        <Button bkColor='#B6B9B7' color="white" width="25" height="35" fontSize="1.2">Cancelar</Button>
        </Botoes>
        </form>  
     </TabPanel>
        </Tabs>
      </Content>
    )
  }