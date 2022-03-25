import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount';
import { useCartContext } from '../../Context/CartContext';

export const ItemDetail = ({title, description, price, imgUrl, stock}) => {

  const [option, setOption] = useState(true)

  const {agregarCart, CartList, IsInCart} = useCartContext()

  function onAdd(cantidad) {
    setOption(false)
    agregarCart({...stock, title: title, cantidad: cantidad, price: price, imgUrl: imgUrl})
  }
  console.log(CartList)
  return (
    <div className='item-detail'>
        <div className='portada'>
          <img src={imgUrl} alt={title} />
        </div> 
        
        <div className='detail'>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h2>${price}</h2>

            { option ?
                  <ItemCount stock={stock} initial={1} onAdd={onAdd}/>: 
                  
                  <Link to={`/CartWidget`}> <button>Finalizar compra</button> </Link>
                  

            }
           
        </div>
        
    </div>
  )
}
