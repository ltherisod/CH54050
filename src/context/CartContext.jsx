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
          const nuevoCarrito = cart.map((compra)=>{
            if(compra.id === item.id){
                return {...compra, quantity: compra.quantity + quantity}
            }else{
                return compra
            }
          })
          setCart(nuevoCarrito)
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

    //sumaba la cantidad total
    const cartQuantity = () =>{
        return cart.reduce((acc, compra)=> acc += compra.quantity, 0)
    }

    //sumar el total a pagar

    const cartPriceTotal = () =>{
        return cart.reduce((acc, compra)=> acc += (compra.price * compra.quantity), 0)
    }

    return(
        // le asiganmos el contexto que provee
        <CartContext.Provider value={{cart,addItem, clear, removeItem, isInCart, cartQuantity, cartPriceTotal}}>
            {children}
        </CartContext.Provider>
    )
}

