import {BsCartFill} from "react-icons/bs"
import Badge from 'react-bootstrap/Badge'
const CartWidget = ({counter}) => {
   
    return(
        <div style={{display:'flex', }}>
            <Badge bg="danger">{counter}</Badge>
            <BsCartFill color='violet' fontSize={'1.5rem'}/>
        </div>
    )
}
export default CartWidget