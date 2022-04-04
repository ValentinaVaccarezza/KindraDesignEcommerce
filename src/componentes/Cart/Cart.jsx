import { useState } from "react";
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { CartContextProvider } from "../../Context/CartContext";
import { useContext } from "react";
//import './CartWidget.css';//
import { CartContext} from '../../Context/CartContext';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
  
    const {CartList, vaciarCart, removeItem, totalCompra} = CartContextProvider(CartContext)
  
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
                      <button className="">Comenzá a comprar</button>
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
                        <h4>precio: {item.price}</h4>
                        <h4>cantidad:{item.cantidad}</h4>
                        <button className='botonCruz' onClick={() => removeItem(item.id)}> X </button>
                      </div>
  
                  </div>)
                }
  
                <div>
                  <button className='botonTotal' >Total: ${totalCompra()} </button>
                  <p>{id.length !== '' && `Tu id de compra es: ${id}`}</p>
                  <div>
                    <Link to={'/'} >
                        <button>Seguir comprando</button>
                    </Link>
                    <button className='botonVaciar' onClick={vaciarCart}>VaciarCarrito</button>
                    <button onClick={generarOrden}>Terminar compra</button>
                    
  
                    
                  </div>  
                </div>
              </>  
          }
        
      </div>
  
  
    )
  
  }
  