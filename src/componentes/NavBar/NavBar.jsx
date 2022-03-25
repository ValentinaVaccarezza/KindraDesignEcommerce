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
       <NavLink to={`/category/tarjetas`} className="subMenu" id='link'>Tarjetas/Invitaciones</NavLink>
       <NavDropdown.Divider />
        <NavLink to={`/category/libretas`} className="subMenu" id='link'>Libretas/Agendas</NavLink>
        <NavDropdown.Divider />
        <NavLink to={`/category/stickers`} className="subMenu" id='link'>Stickers adhesivos</NavLink>
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