import React, { useState } from "react";
import './ItemCount.css';

 export const ItemCount = ({stock, initial, onAdd}) => {

     const [quantity, setQuantity] = useState(initial) 

     const functionRest = () => {
         if(quantity > 1){
             setQuantity(quantity-1)
         }
     }
     const functionAdd = () => {
         if(quantity < stock){
             setQuantity(quantity+1)
         }
     }

     return (
         <div className="contador">
             <button disabled={quantity === 1} onClick={functionRest} className="botonResta"> 
                -
             </button>
            <span className="mx-3">{quantity}</span>
            <button disabled={quantity === stock} onClick={functionAdd} className="botonSuma">
                +
            </button>
            <button disabled={quantity === 0} onClick={ () => onAdd(quantity) } className="botonAgregar">
                Agregar al carrito
            </button>
         </div>
     )
 }

