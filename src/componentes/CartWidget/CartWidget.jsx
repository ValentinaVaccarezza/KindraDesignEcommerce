import React from 'react';
import './CartWidget.css';
import carrito from '../imagenes/carrito.png';


export const CartWidget = () => {
  return (
    <div id='cart-widget'>
        <img src= { carrito } className="carrito" alt="carrito" />
    </div>
  )
}
