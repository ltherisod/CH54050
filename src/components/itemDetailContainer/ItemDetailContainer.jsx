import { useEffect, useState } from "react"
import {  getProducts } from "../../mock/fakeApi"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({})
    const [cargando, setCargando]= useState(false)
    const {itemId} = useParams()

    useEffect(()=>{
        setCargando(true)
        getProducts()
        .then((res)=> setProducto(res.find((item)=> item.id === itemId)))
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