import React from 'react'
import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({productDetail}) => {
  return (
    <div>
        <h3>Detalle de : {productDetail.name}</h3>
        <img src={productDetail.img} alt={productDetail.name}/>
        <p>{productDetail.description}</p>
        <p>${productDetail.price}</p>
        <ItemCount stock={productDetail.stock}/>
    </div>
  )
}

export default ItemDetail