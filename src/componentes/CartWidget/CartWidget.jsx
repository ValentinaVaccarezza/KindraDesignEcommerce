import { useState } from "react";
import './CartWidget.css';
import carrito from '../imagenes/carrito.png';
import { CartContext, useCartContext } from '../../Context/CartContext';


export const CartWidget = () => {
  return (
    <div id='cart-widget'>
        <img src= { carrito } className="carrito" alt="carrito" />
    </div>
  
  )
}


export const Cart = () => {

  const {CartList, vaciarCart, removeItem, totalCompra} = useCartContext()

  return (
    <div>
      
      {CartList.map(item => <div className="carritoDetalle">
        <div>
          <h3>{item.title}</h3>

          <h4><img className='imgProd' src={item.imgUrl} alt={item.title}/></h4>

          <h4>Cantidad: {item.cantidad}</h4>

          <h4>Total: {item.price * item.cantidad}</h4>

          <button className="botonCruz" onClick={() => removeItem(item.id)}> X </button>
        </div>
      </div>)}

      <div className='botonesCompra'>
        <button className="botonTotal" >Total carrito: ${totalCompra()}</button>

        <button className="botonVaciar" onClick={vaciarCart}>Vaciar carrito</button>

      </div>

    </div>

    
  )


}


