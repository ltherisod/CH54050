import React, { useContext, useState } from 'react'
import ItemCount from '../itemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
const ItemDetail = ({producto}) => {

const [compra, setCompra] = useState(false)
//llamo al hook y le digo que contexto quiero usar
const {addItem} = useContext(CartContext)

  const onAdd = (cantidad) =>{
    addItem(producto,cantidad)
    //no recomiendo usarlo
    // setCantidadAgregada(cantidad)
    setCompra(true)
  }


  return (
    <div className='d-flex flex-column align-items-center justify-content-around'>
        <h3 style={{ color: producto.stock < 6 ? 'violet' :'black'}}>Detalle de: {producto.name} </h3>
        <img alt={producto.name} src={producto.imagen}/>
        <p>{producto.description}</p>
        <p>${producto.price},00</p>
        {/* Como recomiendo hacerlo */}
        {compra && <p>Ya agregaste {producto.name} en el carrio! 🙌 </p>}
        {producto.stock < 6  && <p>Apurate! Solo quedan pocas unides en stock! 😱</p>}
       { compra ? <button className='btn btn-success'>Ir al carrito</button> : <ItemCount stock={producto.stock} onAdd={onAdd}/>}
       {/* Como lo dice tal cual la actividad del contador */}
       {/* {cantidadAgregada > 0 
        ? <button className='btn btn-success'>Ir al carrito</button> 
        : <ItemCount stock={producto.stock} onAdd={onAdd}/> } */}
    </div>
  )
}

export default ItemDetail