import React from 'react'
// import { PacmanLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
    {/* <PacmanLoader color="yellow" size='5rem' /> */}
        <img src='https://i.postimg.cc/TYFxYCy7/image-processing20210907-13511-1juj33d.gif' alt='loader'/>
    </div>
  )
}

export default Loader
