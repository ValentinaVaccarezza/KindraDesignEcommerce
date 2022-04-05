import React, {useContext} from 'react';
import carrito from '../../imagenes/carrito.png';
import { Link } from "react-router-dom";
/*import { CartContextProvider } from "../../../Context/CartContext";*/
import { CartContext } from '../../../Context/CartContext';
import './CartWidget.css';

export const CartWidget = () => {
    const {CartList, totalCompra} = useContext(CartContext)

  return (
    <div id='cart-widget'>
      <Link to={'/Cart'} className="carrito">
        <img src= { carrito } className="carrito" alt="carrito" />
        {totalCompra() > 0 ? <div className='totalItems'>${totalCompra ()}</div> : <></> }
        </Link>

    </div>
  
  )
}