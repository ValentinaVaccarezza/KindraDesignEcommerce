import React from "react";
import './ItemListContainer.css';
export const Item = ({title, description, price, imgUrl,  stock}) => {
    return (
        <div className="item">
            <div className='title'>{title}</div>
            <img src={imgUrl} alt={title} className="fotos" />
            <div className="description">{description}</div>
            <button>Ver mas sobre el producto</button>
            <div className="stock">${price}</div>
        </div>
    )
}