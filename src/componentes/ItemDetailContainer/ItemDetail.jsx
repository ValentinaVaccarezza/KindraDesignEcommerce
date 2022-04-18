import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({title, description, price, imgUrl, stock, id}) => {

  const [option, setOption] = useState(true)

  const {addCart, CartList} = useContext(CartContext)

  function onAdd(quantity) {
    setOption(false)
    addCart({...stock, title: title, quantity: quantity, price: price, imgUrl: imgUrl, id: id})
  }
  console.log(CartList)
  return (
    <div className='detalleProd'>
        <div className='portada'>
          <img src={imgUrl} alt={title} />
        </div> 
        
        <div className='detail'>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h2>${price}</h2>

            { option ?
                  <ItemCount stock={stock} initial={1} onAdd={onAdd}/> :
                  <div className='botonesCompra'>
                    <Link to={`/`}> <button className='seguir'>Seguir comprando</button> </Link>
                    <Link to={`/Cart`}> <button className='finalizar'> Finalizar compra</button> </Link>
                  </div>                

            }
           
        </div>
        
    </div>
  )
}