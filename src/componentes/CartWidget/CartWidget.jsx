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

  const {CartList, vaciarCart, removeItem} = useCartContext()

  return (
    <div>
      
      {CartList.map(item => <li>Nombre: {item.title} Precio: {item.price} Cantidad: {item.cantidad} {item.imgUrl}</li>)}

      <button onClick={removeItem}> X </button>

      <button onClick={vaciarCart}>Vaciar carrito</button>
    </div>
  )
}
