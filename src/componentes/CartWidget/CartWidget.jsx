import { useContext } from "react";
import './CartWidget.css';
import carrito from '../imagenes/carrito.png';
import { CartContext} from '../../Context/CartContext';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


export const CartWidget = () => {

  const {totalCompra} = useContext(CartContext)

  return (
    <div id='cart-widget'>
      <Link to={'/CartWidget'} className="carrito">
        <img src= { carrito } className="carrito" alt="carrito" />
        {totalCompra() > 0 ? <div className='totalItems'>${totalCompra ()}</div> : <></> }
        </Link>

    </div>
  
  )
}


export const Cart = () => {

  const {CartList, vaciarCart, removeItem, totalCompra} = useContext(CartContext)
  if (CartList.length === 0) {
    return (
      <div className='div-return'> 
    
        <h2>Tu carrito está vacío</h2>
          <Link to='/' className="">
            <button className="">Quiero comprar</button>
          </Link>
      </div>
    )
  } else {
    return (
      <div className="carritoDetalle">
        {CartList.map(item => 
                <div className="carritoDetalle">
                  <div key={item.id}>
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

}


