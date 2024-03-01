import React from 'react'
import CardPersonaje from '../cardPersonaje/CardPersonaje'

const ListPersonajes = ({personajes}) => {
  return (
    <div>
         {personajes.map((personaje) => <CardPersonaje personaje={personaje} key={personaje.id}/>)}
    </div>
  )
}

export default ListPersonajes