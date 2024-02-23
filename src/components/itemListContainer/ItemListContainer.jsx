import React from 'react'
//import hook
import {useState, useEffect} from 'react'
import ItemCount from '../itemCount/ItemCount'

function ItemListContainer({greeting}) {
    // console.log('soy ItemListContainer y me renderice')
    // const [saludo, setSaludo]=useState('Hola')
    // const [show, setShow] = useState(false)
    // //let numero = 0
    // const [numero, setNumero] = useState(0)
    // const cambiarSaludo = () =>{
    //   setSaludo('Chau')
    // }

    // const sumar = () =>{
    //   setNumero (numero + 1)
    // }

    // const cambiarShow = () =>{
    //   setShow(!show)
    // }
    // //se ejecuta todas las veces
    // //Caasi no se usa
    // useEffect(()=>{
    //   console.log('me ejecuto todas las veces')
    // })

    // //se ejecuta una sola vez

    // useEffect(()=>{
    //   console.log('me ejecuto una sola vez')
    // },[])

    // //me ejecuto cada vez que cambie algo
    // useEffect(()=>{
    //   console.log('Me ejecuto cuando numero cambie')
    // },[numero])

  return (
    <div>
        <h1 className='fst-italic text-danger-emphasis'>{greeting}</h1>
        {/* <p>{numero}</p>
        <button onClick={cambiarSaludo}>{saludo}</button>
        <button className='btn btn-primary' onClick={sumar}>
         +
        </button>
        <button onClick={cambiarShow}>{'cambiar show'}</button> */}
        <ItemCount stock={11}/>
    </div>
  )
}

export default ItemListContainer 