import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import getStock from '../helpers/getStock';
import {stock} from '../../data/stock';




const ItemDetailContainer = () => {
  
    const[item, setItem] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getStock(stock)
        .then((res) => {
            setItem(res.find( (item) => item.id === 1))
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <div className='item-detail-container'>
            {
                loading?
                <div className='cargando'>
                    Cargando... </div>
                    :
                    <ItemDetail {...item}/>
            }

        </div>
    )

    
}

export default ItemDetailContainer