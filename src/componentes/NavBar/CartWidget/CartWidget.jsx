import React, {useContext} from 'react';
import carrito from '../../imagenes/carrito.png';
import { Link } from "react-router-dom";
import { CartContext } from '../../../Context/CartContext';
import './CartWidget.css';

export const CartWidget = () => {
    const {CartList, totalShop} = useContext(CartContext)

  return (
    <div id='cart-widget'>
      <Link to={'/Cart'} className="carrito">
        <img src= { carrito } className="carrito" alt="carrito" />
        {totalShop() > 0 ? <div className='totalItems'>${totalShop ()}</div> : <></> }
        </Link>

    </div>
  
  )
}