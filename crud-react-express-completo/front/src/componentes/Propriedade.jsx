import React from 'react'
import {Link} from 'react-router-dom' //npm i react-router-dom
import axios from 'axios'//npm i axios
export default function Propriedade({id,nome,preco,avaliacao}) {

  const config = {
    headers: {
        Authorization: "Bearer " + sessionStorage.getItem('token')
    }
  }


  const handleDelete = async () =>{
    let c = confirm(`Deseja apagar a propriedade ${nome}`);
    if(c === true){
      try {
        const resposta = await axios.delete(`http://localhost:3000/propriedades/deletar-propriedade/${id}`,config);
        if(resposta.status === 200)
          location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <tr>
        <td>{nome}</td>
        <td>{preco}</td>
        <td>{avaliacao}</td>
        <td>
            <Link to='/atualizar-propriedade' state={{nome,preco,avaliacao,id}}>Atualizar</Link>
            <button onClick={handleDelete}>Apagar</button>
        </td>
    </tr>
  )
}