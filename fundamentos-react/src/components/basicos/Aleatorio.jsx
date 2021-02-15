import React from 'react'


export default function(props){
    const {min, max} = props;
    
    const aleatorio = parseInt(Math.random() * (max - min)) + props.min;
    return(
    <div>
        <h2>Valor Aleatorio</h2>
        <p><strong>Valor minimo: </strong>{min}</p>
        <p><strong>Valor máximo: </strong>{max}</p>
        <p><strong>Valor escolhido: </strong>{aleatorio}</p>

    </div> 
    );   
};