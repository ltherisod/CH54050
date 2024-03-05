import React from 'react'
import ItemCount from '../itemCount/ItemCount'
const ItemDetail = ({producto}) => {
  return (
    <div>
        <h3>Detalle de: {producto.name} </h3>
        <img alt={producto.name} src={producto.imagen}/>
        <p>{producto.description}</p>
        <p>${producto.price},00</p>
        <ItemCount stock={producto.stock}/>
    </div>
  )
}

export default ItemDetail