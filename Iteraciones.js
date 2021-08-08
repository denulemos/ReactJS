import React from 'react'

const Iteraciones = () => {
    const numeros = [1,2,3,4,5,6];

    return (
      <div>
          {numeros.map((elemento, index) => {
              return <p key={index}>{elemento}</p>
          })}
      </div>

    )
}

export default Iteraciones
