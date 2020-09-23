import React, { useState } from 'react'

// Estilização
import { Head } from './styles'
import { Logo } from './styles'


//Icons
import { BsSearch } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';

export default function SearchBar(){

    const [barText, setBarText] = useState('')
        return(
            <Head>
                <input type="text" name="search" placeholder="Pesquisar estágios ou projetos..." value={barText}
                onChange={(e) => setBarText(e.target.value)}/>
                <button> <BsSearch/> </button>

                <Logo>
                    <div className="more">
                    <GrAdd size={30}/>
                    </div>
                    <div className="logo-icon">
                        Logo
                    </div>
                </Logo>
            </Head>
        )
    }
