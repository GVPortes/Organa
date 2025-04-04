// Este arquivo é responsável por renderizar o
// componente App na página HTML
// Esse arquivo é o ponto de entrada do nosso projeto
// Aqui renderizamos o nosso projeto
// Importamos o React e o ReactDOM
// Importamos o arquivo CSS global

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
