import React from 'react'
import { useState, useEffect } from 'react'
const HarryPotterFetch = () => {
    const [estudiantes, setEstudiantes] = useState([])

    //API Harry Potter
    useEffect(()=>{
       fetch('https://hp-api.onrender.com/api/characters/') //pido datos 
       .then((res)=> res.json()) //traduzco
       .then((result)=> setEstudiantes(result))//lo guardo
       .catch((error)=> console.log(error))//atrapo el error
    },[])

    console.log(estudiantes)
    
  return (
    <div>volvemos 20:38 hs</div>
  )
}

export default HarryPotterFetch