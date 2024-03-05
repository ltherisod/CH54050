import { useEffect, useState } from "react"
import { getOneProduct, getProducts } from "../../mock/fakeApi"
import ItemDetail from "../itemDetail/ItemDetail"

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({})

    //Ejemplo si hago una funcion a parte
    // useEffect(()=>{
    //     getOneProduct('2')
    //     .then((res)=> setProducto(res))
    //     .catch((error)=> console.log(error))
    // },[])

    //Ejemplo de usar la funcion de ItemListContainer
    useEffect(()=>{
        getProducts()
        .then((res)=> setProducto(res.find((item)=> item.id === '2')))
        .catch((error)=> console.log(error))
    },[])

    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer