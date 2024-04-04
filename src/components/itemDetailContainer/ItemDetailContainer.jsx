import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../../mock/data'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from '@firebase/firestore'
import { db } from '../../service/firebase'
const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] =useState({})
    const [loading, setLoading] = useState(false)
    const [validateItem, setValidateItem] = useState(false)
    const {itemId}= useParams()
    console.log(itemId)
    useEffect(()=>{
      setLoading(true)
      const collectionProd = collection(db, "productos")
      const refereciaAlDoc = doc(collectionProd, itemId)
      getDoc(refereciaAlDoc)
      .then((res)=> {
        if(res.data()){

          setProductDetail({id: res.id, ...res.data()})
        }else{
          setValidateItem(true)
        }
       
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[])
   
console.log(productDetail)
    if(loading){
        return<h1>Cargando detalle...</h1>
    }
  return (
    <div>
        {validateItem ? <p>El producto no existe</p> : <ItemDetail productDetail={productDetail} />}
    </div>
  )
}

export default ItemDetailContainer