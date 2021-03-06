import React from "react";
import './ItemListContainer.css';
import { Link } from 'react-router-dom';


export const Item = ({id, title, description, price, imgUrl}) => {
    return (
        <div className="item">
            <div className='title'>{title}</div>
            <img src={imgUrl} alt={title} className="fotos" />
            <div className='description'>{description}</div>
            <Link to={`/item/${id}`}> <button className='botonProductos'>Ver mas sobre el producto</button> </Link>
            <div className='stock'>${price}</div>
        </div>
    )
}