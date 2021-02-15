import React from 'react'

import Aleatorio from './components/basicos/Aleatorio';
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Primeiro from './components/basicos/Primeiro'

export default _ =>
    <div id="app">
        <h1>Fundamentos React (Arroz Func)</h1>
        <Aleatorio min={1} max={23}/>
        <Fragmento />
        <ComParametro
            titulo="segundo componente"
            subtitulo="2" />

        <Primeiro></Primeiro>
    </div>
