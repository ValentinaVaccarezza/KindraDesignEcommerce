import React, { useContext, useState } from "react";
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { CartContext} from '../../Context/CartContext';
import { Link } from "react-router-dom";
import './Cart.css';

export const Cart = () => {
 
    const [id, setId] = useState("")
    const handleChange = (e) => {
      setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value,
      })
    }
  
    const [dataForm, setDataForm] = useState({
      email: "",
      name: "",
      phone: "",
    })
  
    const {CartList, vaciarCart, removeItem, totalCompra} = useContext(CartContext)
  
    const generarOrden = async () => {
      let orden = {}
      orden.buyer = dataForm
      orden.total = totalCompra()
      orden.fecha = new Date()
      orden.items = CartList.map((cartItem) => {
        const id = cartItem.id
        const nombre = cartItem.title
        const precio = cartItem.price * cartItem.cantidad
       
        return { id, nombre, precio}
      })
  
      console.log(orden)
  
      const db = getFirestore()
      const queryColection = collection(db, 'orders')
      addDoc(queryColection, orden).then((resp) => setId(resp.id))
        .catch((err) => console.error(err))
        .finally(() => console.log("terminado"))
      
    }
  
    console.log(Cart)
  
   
  
    return(
     
      <div className='div-return'> 
    
        {CartList.length === 0 ? 
              <>
                  <h2>Tu carrito está vacío</h2>
                  <Link to='/' className="">
                      <button className="seguir">Comenzá a comprar</button>
                  </Link>
              </>
              :
              <>
              {CartList.map(item => 
                  <div key={item.id} className='carritoDetalle'>
                      <div className='carritoDetalle'>
                        <img src={item.imgUrl} alt={item.title} className='img-cart'/>
                      </div>
                      <div className='portada-detail'>
                        <h4>{item.title}</h4>
                        <h4>Precio: ${item.price}</h4>
                        <h4>Cantidad: {item.cantidad}</h4>
                        <button className='botonCruz' onClick={() => removeItem(item.id)}> X </button>
                      </div>
  
                  </div>)
                }
  
                <div>
                  <button className='botonTotal' >Total: ${totalCompra()} </button>
                  <p>{id.length !== '' && `Tu id de compra es: ${id}`}</p>
                  <div>
                    <Link to={'/'} >
                    <button className='seguir'>Seguir comprando</button>
                    </Link>
                    <button className='botonVaciar' onClick={vaciarCart}>VaciarCarrito</button>
                    <button  className="terminar" onClick={generarOrden}>Terminar compra</button>
                    
  
                    
                  </div>  
                </div>
              </>  
          }
        
      </div>
  
  
    )
  
  }
  