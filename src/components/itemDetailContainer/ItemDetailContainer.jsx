import { useEffect, useState } from "react"
import {  getProducts } from "../../mock/fakeApi"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({})
    const [cargando, setCargando]= useState(false)
    const {itemId} = useParams()

    // useEffect(()=>{
    //     setCargando(true)
    //     getProducts()
    //     .then((res)=> setProducto(res.find((item)=> item.id === itemId)))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setCargando(false))
    // },[itemId])

    //FIREBASE!!
    useEffect(()=>{
        setCargando(true)
        //coleccion y proyecto
        const collectionProd = collection(db, "productos")
        //crear referencia
        const referenciaDoc = doc(collectionProd, itemId)
        // Version resumida const referenciaDoc=doc(db,"productos",itemId)
        //Traer el doc
        getDoc(referenciaDoc)
        .then((res)=> setProducto({id:res.id, ...res.data()}))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[itemId])

    
    return(
        <>
           { cargando ? <h1>Cargando item...</h1> : <ItemDetail producto={producto}/>}
        </>
    )
}

export default ItemDetailContainer