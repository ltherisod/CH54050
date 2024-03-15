import {BsCartFill} from "react-icons/bs"
import Badge from 'react-bootstrap/Badge'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
const CartWidget = ({counter}) => {
    const {cart}= useContext(CartContext)
  
    return(
        <div style={{display:'flex'}}>
            <Badge bg="danger">{cart.length}</Badge>
            <BsCartFill color='violet' fontSize={'1.5rem'}/>
        </div>
    )
}
export default CartWidget