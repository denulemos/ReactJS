import React from 'react'
import {useParams} from 'react-router-dom';

const Inicio = () => {

    const {nombre} = useParams();
    return (
        <div>
          <h1>{nombre}</h1> 
        </div>
    )
}

export default Inicio
