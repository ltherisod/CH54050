const Item = ({producto}) => {
    return(
        <div className="card" style={{width: '18rem'}}>
        <img src={producto.imagen} className="card-img-top" alt={producto.name}/>
        <div className="card-body">
          <h5 className="card-title">{producto.name}</h5>
          <p>${producto.price}</p>
          <a href="#" className="btn btn-primary">Ver mas</a>
        </div>
      </div>
    )
}
export default Item