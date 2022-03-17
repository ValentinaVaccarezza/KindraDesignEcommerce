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

export const Cart = () => {
  return (
    <div>
      <h3>Soy el carrito</h3>
    </div>
  )
}
