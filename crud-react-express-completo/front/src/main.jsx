import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AdicionarPropriedade from './componentes/AdicionarPropriedade.jsx'
import AtualizarPropriedade from './componentes/AtualizarPropriedade.jsx'
import LoginUser from './componentes/auth/LoginUser.jsx'
import CreateUser from './componentes/auth/CreateUser.jsx'
import ListaPropriedades from './componentes/ListaPropriedades.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element : <App />,
    children: [
      {
        path : '/',
        element : <LoginUser />
      },
      {
        path: 'criar-user',
        element : <CreateUser />
      }
    ] 
  },
  {
    path: '/listar-propriedades',
    element: <ListaPropriedades />
  },
  {
    path: '/adicionar-propriedade',
    element : <AdicionarPropriedade />
  },
  {
    path: '/atualizar-propriedade',
    element : <AtualizarPropriedade />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)