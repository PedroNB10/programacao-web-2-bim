import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'


// Configurações das rotas de client-side
// estamos utilizando a lib externa react-router-dom
// npm i react-router-dom

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
  
])

// Ao invés de renderizar o App, renderizamos o RouterProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router} />
)
