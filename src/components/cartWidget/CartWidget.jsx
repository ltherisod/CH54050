import './cartWidget.css'
const CartWidget = () => {
    return(
        <div className='container'>
        {/* Si la imagen esta en public, se usa de esta manera */}
        <img className='cart' src='./images/carrito.png' alt='carrito'/>
        <span className='badge'>5</span>
        </div>
    )
}

export default CartWidget