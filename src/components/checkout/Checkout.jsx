import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail]=useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartPriceTotal, clear} = useContext(CartContext)
    const nameHandler = (e) =>{
       setName(e.target.value)
    }
    //console.log(name,lastname, email, phone)
    //funcion dinamica
    const userData = (e)=>{
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value
            }
        )
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(!user.name || !user.lastname  || !user.email ){
            alert('Los campos son obligatorios')
        }else if (user.email !== validateEmail){
            alert('Los mails deben ser iguales')
        }else{
            //obj de la orden
            let order ={
                user,
                items: cart,
                total:cartPriceTotal(),
                date:serverTimestamp()
            }
            //nuestra coleccion
            const ventas = collection(db, 'orders')
            //agregamos el doc
            addDoc(ventas,order)
            .then((res)=> {
                //Actualizar el stock
                //OPCIONAL
                cart.forEach((item)=>{
                    const docRef = doc(db, 'productos', item.id)
                    getDoc(docRef)
                    .then((dbDoc)=>{
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.quantity})
                    })
                })
               setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
    }
    
  return (
   <div>
    {orderId !== '' 
    ?<div>
        <h4>Generaste tu orden!</h4>
        <h5>El id es: {orderId}</h5>
        <Link to ='/'>Volver a Home</Link>
    </div>
    :
    <div>
        <h4>Completa con tus datos</h4>
        <form className='d-flex flex-column align-items-center' onSubmit={finalizarCompra}>
            <input name='name' placeholder='Ingrese su nombre' type='text' onChange={userData}/>
            <input name='lastname' placeholder='Ingrese su apellido' type='text' onChange={userData} />
            <input name='phone' placeholder='Ingrese su telefono' type='tel' onChange={userData}/>
            <input name='email' placeholder='Ingrese su correo' type='email' onChange={userData}/>
            <input name='second-email' placeholder='Repita su correo'type='email' onChange={(e)=> setValidateEmail(e.target.value)}/>
            <button type='submit'>Enviar</button>
        </form>
    </div>}
   </div>
  )
}

export default Checkout