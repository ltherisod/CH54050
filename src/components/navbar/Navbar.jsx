import './navbar.css'
import CartWidget from "../cartWidget/CartWidget"
 {/* Si la imagen esta dentro de src */}
import logo from '../../images/logo.png'
const Navbar = () =>{
    return(
              <nav className='navContainer'>
                    <a className='link' href="/">
                        {/* Si la imagen esta dentro de src */}
                        <img alt='logo' src={logo} className='logo'/>
                    </a>
                    <div className='linksContainer'>
                    <a className='link' href="/">Nuevos</a>
                    <a className='link' href="/">Mas vendidos</a>
                    <a className='link'  href="/">Ofertas</a>
                    </div>
                    <CartWidget/>
              </nav>
    )
}

export default Navbar

