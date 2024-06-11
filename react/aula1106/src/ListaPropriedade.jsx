import { Propriedade } from "./Propriedade";
import './ListaPropriedade.css'

export function ListaPropriedade({dados}) {

    // dados é uma lista de objetos com as propriedades nome, preco e avaliacao
    // propriedades é uma lista de componentes Propriedade
    // const propriedades = dados.map((dado) => {
    //    return (
    //     <Propriedade nome={dado.nome} preco={dado.preco} avaliacao={dado.avaliacao} />
    //    )
    // })

    const ListaPropriedades = dados.map((dado) => <Propriedade {...dado} />) // spread operator: ele pega o objeto dado e passa cada uma das propriedades como parâmetro para o componente Propriedade

    return (
        <div className="lista-propriedade">
            {ListaPropriedades}
        </div>
    )
}