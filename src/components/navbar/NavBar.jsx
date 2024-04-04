import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

function NavBar() {
  const dropdownData = [
    {path:'/categories/nuevos', name:'Nuevos'},
    {path:'/categories/mas vendidos', name:'Mas vendidos'},
    {path:'/categories/oferta', name:'Ofertas'},
  ]
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'><img src={logo} alt='logo' style={{width:'7rem'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/form'>Formulario</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {dropdownData.map((url)=>{
                return(
                  <div  key={url.name}>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item as={NavLink} to={url.path}> {url.name}</NavDropdown.Item> 
                  </div>
                )
              })}
              {/* <NavDropdown.Item as={NavLink} to='/categories/nuevos'> Nuevos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/categories/mas vendidos'>
                Mas vendidos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/categories/oferta'>Ofertas</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <NavLink to='/cart' style={{textDecoration:'none'}}>
          <CartWidget counter={15}/>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;