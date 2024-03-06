import React from 'react'

const ComponenteChildren = ({children}) => {
  return (
    <div>
        <p>Soy un componente que muestra children</p>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            {children}
        </div>
    </div>
  )
}

export default ComponenteChildren