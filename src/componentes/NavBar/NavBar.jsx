import React from 'react';
import './NavBar.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logoKindra from './../imagenes/logoKindra.jpeg';
import { CartWidget } from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className='menu'>
        <Container id="containerNav">
        <NavLink to={`/`}>
          <img src={ logoKindra } className="logoKindra" alt="logo de Kindra Design" />
        </NavLink>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto cajaLinks">
      
      <NavLink to={`/category/cuadros`} id='link'>Cuadros</NavLink>
      <NavLink to={`/category/fotoLibros`} id='link'>Foto Libros</NavLink>
      <NavLink to={`/category/fotosPolaroid`}id='link'>Fotos Polaroid</NavLink>
      <NavDropdown title="Papeleria" id="link">
       <NavLink to={`/category/tarjetas`} id='link'>Tarjetas personalizadas</NavLink>
        <NavDropdown.Item href="#action/3.2" id='linksPapeleria'>Libretas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" id='linksPapeleria' >Agendas</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4" id='linksPapeleria'>Algo mas</NavDropdown.Item>
      </NavDropdown>
      <NavLink to={`/contacto`}id='link'>Contacto</NavLink>

        </Nav>
        <Nav>

        <NavLink to="/CartWidget"> 
        <CartWidget/>
     
        </NavLink> 

        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavBar