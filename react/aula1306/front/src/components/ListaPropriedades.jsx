import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Propriedades from "./Propriedades";

function ListaPropriedades() {
  const [propriedades, setPropriedades] = useState([]);

  useEffect(() => {
    async function buscaPropriedades() {
      // a função está dentro do useEffect para mostrar que ela é uma função assíncrona e será chamada apenas uma vez
      const response = await axios.get("http://localhost:3000/propriedades");

      setPropriedades(response.data);
      console.log(response.data);
    }

    buscaPropriedades();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Avaliação</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {propriedades.map((p) => {
            return (
              <Propriedades
                key={p.id}
                nome={p.nome}
                preco={p.preco}
                avaliacao={p.avaliacao}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListaPropriedades;
