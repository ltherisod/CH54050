import React from 'react'

function ItemListContainer({greeting}) {
    //console.log(props)
    //const {greeting}=props
  return (
    <div>
        <h1 className='fst-italic text-danger-emphasis'>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer