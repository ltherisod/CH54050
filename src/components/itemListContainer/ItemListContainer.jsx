import React from 'react'
//import hook
import {useState, useEffect} from 'react'
import {getProducts} from '../../mock/fakeApi'
import ItemList from '../itemList/ItemList'
import Item from '../item/Item'

function ItemListContainer({greeting}) {
  const [productos, setProductos]=useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
    setLoading(true)
    getProducts()
    .then((res)=>setProductos(res))
    .catch((error)=> console.log(error, 'todo mal'))
    .finally(()=> setLoading(false))
  },[])

  //Ejemplo de render props

  // const renderProductos = () =>{
  //   return productos.map((producto)=><Item key={producto.id} producto={producto}/>)
  // }


  if(loading){
    return<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}> <h1>Cargando productos...</h1></div>
  }
  

  return (
    <div>
        <h1 className='fst-italic text-danger-emphasis'>{greeting}</h1>
        {/* {
          productos.map((producto)=> <p key={producto.id}>{producto.stock}</p>)
        } */}
          <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer 
