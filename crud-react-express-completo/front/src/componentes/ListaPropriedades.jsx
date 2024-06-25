import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Propriedade from './Propriedade';
import {Link} from 'react-router-dom'; //Lembrete npm install react-router-dom

export default function ListaPropriedades() {
    
    const [propriedades, setPropriedades] = useState([]);


    const [authorized, setAuthorized] = useState(false);

    const config = {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem('token')
        }
    }


    useEffect(() =>{
        
        async function buscaPropriedades(){
            try {
                const resposta = await axios.get('http://localhost:3000/propriedades/propriedades',config);
                if(resposta.status === 200){
                    //Armazenar a resposta em um state
                    setPropriedades(resposta.data);
                    setAuthorized(true)
                }  
            } catch (error) {
                setAuthorized(false)
            }
        }
        buscaPropriedades();
    },[]);
  
    if(!authorized)
        return <p>Sem Autorização</p>


    return (
        <div>
            <Link to='/adicionar-propriedade'>Adicionar Nova Propriedade</Link>
            <table>
                <thead>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Avaliação</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    {
                        propriedades.map(p => <Propriedade key={p.id} {...p}/>)
                    }
                </tbody>
            </table>
        </div>
        
    )
}
