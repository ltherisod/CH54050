import React from 'react'
//import hook
import {useState, useEffect} from 'react'
import {getProducts} from '../../mock/fakeApi'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer({greeting}) {
  const [productos, setProductos]=useState([])
  const  [loading, setLoading] = useState(false)
  const {categoryId} = useParams()
  
  useEffect(()=>{
    setLoading(true)
    getProducts()
    .then((res)=>{
      if(categoryId){
        setProductos(res.filter((prod)=> prod.category === categoryId))
      }else{
        setProductos(res)
      }
    })
    .catch((error)=> console.log(error, 'todo mal'))
    .finally(()=> setLoading(false))
  },[categoryId])
  
  if(loading){
    return <h2>Cargando...</h2>
  }

  return (
    <div>
      {/* si quiero que salga la categoria */}
       {
       categoryId 
       ?<h1 className='fst-italic text-danger-emphasis'>{greeting} <span style={{color:'violet'}}>{categoryId}</span></h1>
       :<h1 className='fst-italic text-danger-emphasis'>{greeting}</h1>
       }
       {/* si no quiero que salga la categoria */}
       {/* <h1 className='fst-italic text-danger-emphasis'>{greeting}</h1> */}
          <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer 
