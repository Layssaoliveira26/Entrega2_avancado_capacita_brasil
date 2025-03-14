import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//Esse arquivo será composto por componentes de nível superior, como o App, que será o componente principal 
// da aplicação.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
//