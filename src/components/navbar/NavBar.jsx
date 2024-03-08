import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

function NavBar() {
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'><img src={logo} alt='logo' style={{width:'7rem'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/categories/nuevos'> Nuevos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/categories/mas vendidos'>
                Mas vendidos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/categories/oferta'>Ofertas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget counter={15}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;