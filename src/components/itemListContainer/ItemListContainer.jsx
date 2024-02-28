import React from 'react'
//import hook
import {useState, useEffect} from 'react'
import ItemCount from '../itemCount/ItemCount'
import {getProducts} from '../../mock/fakeApi'
import ItemList from '../itemList/ItemList'

function ItemListContainer({greeting}) {
  const [productos, setProductos]=useState([])
 
  //Ejemplo de promesa
  // const productos=[
  //   {id:'1', name:'product1', stock:10},
  //   {id:'2', name:'product2', stock:0},
  //   {id:'3', name:'product3', stock:50}
  // ]
  //  const getProducts = () =>{
  //   let error = false
  //   return new Promise ((resolve, reject)=>{
  //     setTimeout(()=>{
  //       if(error){
  //         reject('No hay ')
  //       }else{
  //         resolve(productos)
  //       }
  //     },7000)
  //   })
  //  }
  //  //console.log(getProducts())
  //  getProducts().then((res)=> console.log(res)).catch((error)=> console.log(error))
  useEffect(()=>{
    getProducts()
    .then((res)=>setProductos(res))
    .catch((error)=> console.log(error, 'todo mal'))
  },[])
  
  return (
    <div>
        <h1 className='fst-italic text-danger-emphasis'>{greeting}</h1>
        {/* {
          productos.map((producto)=> <p key={producto.id}>{producto.stock}</p>)
        } */}
          <ItemList productos={productos}/>
        <ItemCount stock={11}/>
    </div>
  )
}

export default ItemListContainer 
