import { createContext, useState } from "react";

//crear el contexto
export const CartContext = createContext()

//creamos el proveedor del contexto
export const CartProvider = ({children}) =>{
    const [cart, setCart]= useState([])
    console.log(cart)

    // isInCart: (id) => true|false

    // agregar cierta cantidad de un ítem al carrito
    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            //Aca se tienen que sumar cantidades
            console.log('Ya esta en el carrito')
        }else{

            setCart([...cart,{...item, quantity}])
        }
    }

    // Remover todos los items
    const clear = () =>{
        setCart([])
    }

    // Remover un item del cart por usando su id
    const removeItem = (itemId)=>{
        //mas largo
        // const limpiarCarrito = cart.filter((compra)=> compra.id !== itemId)
        // setCart(limpiarCarrito)
        //se puede hacer en una linea
        setCart(cart.filter((compra)=> compra.id !== itemId))
    }

    const isInCart = (itemId)=>{
        return cart.some((compra)=> compra.id === itemId)
    }

    return(
        // le asiganmos el contexto que provee
        <CartContext.Provider value={{cart,addItem, clear, removeItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

