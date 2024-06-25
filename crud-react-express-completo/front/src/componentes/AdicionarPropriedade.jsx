import React, { useEffect } from 'react'
import { useState } from "react"
import { Link, Navigate } from "react-router-dom";//npm install react-router-dom
import axios from 'axios';//npm install axios

export default function AdicionarPropriedade() {
    
    const [msg, setMsg] = useState('');

    const [propriedade, setPropriedade] = useState({
        id : Date.now(),
        nome : '',
        preco : '',
        avaliacao : ''
    });

    const handleChange = (e) =>{
        //constroi o novo valor
        const novoValor = {
            id : Date.now(),
            [e.target.name] : e.target.value
        }
        //atualizar
        setPropriedade({
            ...propriedade,
            ...novoValor
        });
    }


    const [authorized, setAuthorized] = useState(false);

    const config = {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem('token')
        }
    }

    useEffect(() =>{
        
        async function validaAcesso(){
            try {
                const resposta = await axios.get('http://localhost:3000/propriedades/propriedades',config);
                if(resposta.status === 200){
                     setAuthorized(true)
                }  
            } catch (error) {
                setAuthorized(false)
            }
        }
        validaAcesso();
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(propriedade);
        try {
            const resposta = await axios.post('http://localhost:3000/propriedades/adicionar-propriedade',propriedade,config);
            if(resposta.status === 200){
                setMsg('OK');
                setAuthorized(true);
            }
        } catch (error) {
            console.log(error);    
        }
    }

    if(!authorized)
        return <p>Sem Autorização</p>

    if(msg === 'OK'){
        //NAVEGAR PARA Listar Propriedades
        return <Navigate to='/listar-propriedades' />
    }
    
    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="avaliacao">Avaliação</label>
                <input type="text" name="avaliacao" id="avaliacao" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="preco">Preço</label>
                <input type="text" name="preco" id="preco" 
                onChange={handleChange}
                />
            </div>
            <Link to="/listar-propriedades" >Voltar</Link>
            <button>Enviar</button>

        </form>
    )
}
