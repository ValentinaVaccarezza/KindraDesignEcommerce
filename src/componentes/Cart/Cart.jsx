import React, { useContext, useState } from "react";
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { CartContext} from '../../Context/CartContext';
import { Link } from "react-router-dom";
import './Cart.css';
import swal from 'sweetalert';

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

  const generarOrden = async (e) => {
    e.preventDefault();
    const date = () => {
      let fecha = new Date();
      return fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear();
    }

    let orden = {}
    orden.date = date()
    orden.buyer = dataForm
    orden.total = totalCompra()
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

      vaciarCart()
    
  }
  console.log(dataForm)
  
    return(
     
      <div className='div-return'> 
        <div className="cajaID">
          <p>{id.length > 0 && `Tu ID de compra es: ${id}`}</p>
        </div>
        {CartList.length === 0 ? 
              <>
                  <h2>Tu carrito está vacío</h2>
                  <Link to='/' className="">
                      <button className="seguir">Comenzá a comprar</button>
                  </Link>
              </>
              :
              <>
              <div className="cajaCompras">

                <div className="cajaCompras1">
                  <h3>Mi carrito</h3>
                  {CartList.map(item => 
                  <div key={item.id} className='carritoDetalle'>

                    <div className="tablaCompras">
                      <div> 
                        <h5>Producto</h5>
                        <p>{item.title}</p>
                        <img src={item.imgUrl} className="imgProd"/>
                      </div>
                      <div> 
                        <h5>Precio</h5>
                        <p>${item.price}</p>
                      </div>
                      <div> 
                        <h5>Cantidad</h5>
                        <p>{item.cantidad}</p>
                      </div>
                      <div> 
                        <h5>Total</h5>
                        <p>${totalCompra()}</p>
                      </div>
                      <div>
                      <button className='botonCruz' onClick={() => removeItem(item.id)}> X </button>
                      </div>
                    </div>
  
                  </div>)
                  }
                     <div>
                    <Link to={'/'} >
                    <button className='seguir'>Seguir comprando</button>
                    </Link>
                    <button className='botonVaciar' onClick={vaciarCart}>VaciarCarrito</button>
                  </div> 
                </div>
                
  
                <div className="cajaCompras2">
                  <h3>Formulario de compra</h3>
                  <form className="formID" onSubmit={generarOrden}>
                    <input type='text' name='name' placeholder='Nombre' value={dataForm.name} onChange={handleChange} required/> <br/>

                    <input type='text' name='phone' placeholder='Celular' value={dataForm.phone} onChange={handleChange} required/> <br/>

                    <input type='email' name='email' placeholder='Email' value={dataForm.email} onChange={handleChange} required/> <br/>

                    <button className="terminar" onClick={generarOrden}>Finalizar compra</button>

                  </form>
                </div>
              </div>
              </>  
          }
        
      </div>
  
  
    )
}
 

  