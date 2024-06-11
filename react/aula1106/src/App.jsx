import './App.css'
import { Saudacoes } from './Saudacoes'
import { Dado } from './Dado'
import Rolagem from './assets/Rolagem'
import { ListaPropriedade } from './ListaPropriedade'


const bd = [
  {nome: "Casa", preco: 100000, avaliacao: 5},
  {nome: "Apartamento", preco: 50000, avaliacao: 4},
  {nome: "Sítio", preco: 200000, avaliacao: 3},
  {nome: "Chácara", preco: 150000, avaliacao: 4},
  {nome: "Fazenda", preco: 1000000, avaliacao: 5},

]

function App() {

  return (
    <>
      
       {/* <Saudacoes nome="Maria" idade={18}  />

      <Dado />
      <Rolagem face1={20} face2={8} /> */}

      <ListaPropriedade dados={bd}/>
    </>
  )
}

export default App
