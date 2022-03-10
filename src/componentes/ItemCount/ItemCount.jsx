import React, { useState } from "react";
import './ItemCount.css';

 export const ItemCount = ({stock, initial, onAdd}) => {

     const [cantidad, setCantidad] = useState(initial) 

     const funcionRestar = () => {
         if(cantidad > 0){
             setCantidad(cantidad-1)
         }
     }
     const funcionSumar = () => {
         if(cantidad < stock){
             setCantidad(cantidad+1)
         }
     }

     return (
         <div className="contador">
             <button disabled={cantidad===0} onClick={funcionRestar} className="botonResta"> 
                -
             </button>
            <span>{cantidad}</span>
            <button disabled={cantidad===stock} onClick={funcionSumar} className="botonSuma">
                +
            </button>
            <button disabled={cantidad===0} onClick={ () => onAdd(cantidad) } className="botonAgregar">
                Agregar al carrito
            </button>
         </div>
     )
 }

