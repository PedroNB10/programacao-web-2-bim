import React from 'react'
import { useLocation, Link, Navigate } from 'react-router-dom';//npm i react-router-dom
import { useState } from 'react';
import axios from 'axios'
export default function AtualizarPropriedade() {
  


    
    const [msg, setMsg] = useState('');

    const {id,nome,preco,avaliacao} = useLocation().state;

    const [propriedade, setPropriedade] = useState({
        id,  
        nome,
        preco,
        avaliacao
    });

    const handleChange = (e) =>{
        //constroi o novo valor
        const novoValor = {
            [e.target.name] : e.target.value
        }
        //atualizar
        setPropriedade({
            ...propriedade,
            ...novoValor
        });
    }


    const config = {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem('token')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resposta = await axios.put('http://localhost:3000/propriedades/atualizar-propriedade',propriedade,config);
            if(resposta.status === 200){
                setMsg('OK');
                setAuthorized(true);
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    if(msg === 'OK')
        return <Navigate to='/listar-propriedades'/>
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" 
                onChange={handleChange} value={propriedade.nome}
                />
            </div>
            <div>
                <label htmlFor="avaliacao">Avaliação</label>
                <input type="text" name="avaliacao" id="avaliacao" 
                onChange={handleChange} value={propriedade.avaliacao}
                />
            </div>
            <div>
                <label htmlFor="preco">Preço</label>
                <input type="text" name="preco" id="preco" 
                onChange={handleChange} value={propriedade.preco}
                />
            </div>
            <Link to="/listar-propriedades">Voltar</Link>
            <button>Atualizar</button>
        </form>
    )
}
