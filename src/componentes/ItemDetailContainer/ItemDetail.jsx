import React, { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';

const ItemDetail = ({title, description, price, imgUrl, stock}) => {
  return (
    <div className='item-detail'>
        <div className='portada'>
            <img src={ imgUrl } alt={title}/>
        </div>
        <div className='detail'>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>{price}</h3>
            <ItemCount initial={1} stock={10} />
        </div>
    </div>
  )
}

export default ItemDetail