import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [feedback, setFeedBack] = useState('')
    const capturaNombre = (e) =>{
       setName(e.target.value)
    }

    const capturaEmail = (e) =>{
        setEmail(e.target.value)
    }
console.log(name, email, telephone)
    const enviarDatos = (e) =>{
        e.preventDefault()
        if(name === '' || email === '' || telephone === ''){
            alert(' Complete el form')
            setFeedBack('')
        }else{

            console.log(
                {
                    nombreCompleto:name,
                    correo:email,
                    telefono:telephone
                }
                )
                setFeedBack('Muchas gracias, nos comunicaremos con uds en breve')
        }
    }

    const inputHandler = (e) =>{
        console.log(e)
        if('aeiou'.includes(e.key.toLowerCase())){
            e.preventDefault()
            alert('no no ')
        }
    }

    if(feedback!== ''){
        return <p>{feedback}</p>
    }

  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
        {/* <h1>Actividad</h1>
        <input type='text' onKeyDown={inputHandler}/> */}
        <h1>Form</h1>

        <form className='d-flex justify-content-center flex-column align-items-center' onSubmit={enviarDatos}>
            <input type='text' placeholder='Nombre Completo' onChange={capturaNombre}/>
            <input type='email' placeholder='ejemplo@ejemplo.com' onChange={capturaEmail}/>
            <input type='number' placeholder='02254-566411' onChange={(e)=>setTelephone(e.target.value)}/>
            <button type='submit'>Enviar</button>
        </form>

        <p>{name}</p>
        <p>{email}</p>
        <p>{telephone}</p>
    </div>
  )
}

export default Form