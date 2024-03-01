import React from 'react'
import { useEffect, useState } from 'react'
import ListPersonajes from '../listPersonajes/ListPersonajes'

const FetchContainer = () => {
    //rick y morty
    const [personajes, setPersonajes]= useState([])
   
    //API RICK Y MORTY
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")//pido datos
        .then((res)=>res.json())//traduzco
        .then((data)=>setPersonajes(data.results))//guardamos
        .catch((error)=> console.log(error))//atrapo el error
    },[])

//console.log(personajes, 'personajes')
  return (
    <div>
       <ListPersonajes personajes={personajes}/>
    </div>
  )
}

export default FetchContainer