import {Link, useNavigate} from 'react-router-dom'

const Item = ({producto}) => {
  //ejemplo tiene un boton 
  //custom hook de la libreria para navegar
  const navegar = useNavigate()
    return(
        <div className="card" style={{width: '18rem'}} >
        <img src={producto.imagen}  className="card-img-top" alt={producto.name} />
        <div className="card-body">
          <h5 className="card-title">{producto.name}</h5>
          <p>${producto.price}</p>
          {/* //ejemplo con link */}
          <Link to={`/item/${producto.id}`} className="btn btn-primary">Ver mas</Link>
          {/* //ejemplo con botón */}
          {/* <button onClick={()=> navegar(`/item/${producto.id}`)} className="btn btn-primary"> ver más</button> */}
        </div>
      </div>
    )
}
export default Item