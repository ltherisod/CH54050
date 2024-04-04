import {BsCartFill} from "react-icons/bs"
import Badge from 'react-bootstrap/Badge'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
const CartWidget = ({counter}) => {
   const {cart, cartQuantity} = useContext(CartContext)
   console.log(cart)
    return(
        <div style={{display:'flex', }}>
           {cartQuantity() > 0 &&  <Badge bg="danger">{cartQuantity()}</Badge>}
            <BsCartFill color='violet' fontSize={'1.5rem'}/>
        </div>
    )
}
export default CartWidget