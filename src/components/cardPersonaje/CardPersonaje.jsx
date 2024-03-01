import React from 'react'

const CardPersonaje = ({personaje}) => {
  return (
    <div>
                    <img src={personaje.image} alt={personaje.name}/>
                     <p>{personaje.name}</p> 
                     <p>{personaje.status}</p>          
        </div>
  )
}

export default CardPersonaje