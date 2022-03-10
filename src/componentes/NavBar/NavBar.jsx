import React from 'react';
import './NavBar.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logoKindra from './../imagenes/logoKindra.jpeg';
import { CartWidget } from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className='menu'>
        <Container>
        
        <img src={ logoKindra } className="logoKindra" alt="logo de Kindra Design" />
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
      <Nav.Link href="#features" id='link'>Cuadros</Nav.Link>
      <Nav.Link href="#pricing" id='link'>FotoLibros</Nav.Link>
      <Nav.Link href="#pricing" id='link'>Fotos Polaroid</Nav.Link>
      <NavDropdown title="Papeleria" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1" id='link' >Tarjetas personalizadas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" id='link'>Libretas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" id='link' >Agendas</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4" id='link'>Algo mas</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features" id='link'>Contacto</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link eventKey={2} href="#memes">
       <CartWidget/>
      </Nav.Link>
      
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavBar