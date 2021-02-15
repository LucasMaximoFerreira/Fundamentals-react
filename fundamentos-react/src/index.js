import './index.css'
import React from 'react'

// importar a biblioteca react-dom
import ReactDOM from 'react-dom'
// pegar elemento  no index puxando pelo id
// const element = document.getElementById('root')

import App from './App'

// renderizar algo na tela - 1 parametro = o que quer renderizar na tela / 2 parametro = o elemento(index) do qual quer inserir o 1 parametro
ReactDOM.render(
    <App />,
    document.getElementById('root')
)
