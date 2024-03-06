import Item from "../item/Item"

const ItemList = ({productos, renderProductos}) => {
    //hago el map aca
    return(
        <div style={{display:'flex', justifyContent:"space-around", alignItems:'center', flexWrap:'wrap'}}>
            {productos.map((producto)=> <Item key={producto.id} producto={producto}/>)}
            {/* //renderProps */}
            {/* {renderProductos()} */}
        </div>
    )
}
export default ItemList