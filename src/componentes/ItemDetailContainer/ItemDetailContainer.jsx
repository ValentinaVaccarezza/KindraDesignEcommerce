import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import getStock from '../helpers/getStock';
import {stock} from '../../data/stock';
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {
  
    const[item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const {idItem} = useParams()

    useEffect(() => {
        setLoading(true)
        getStock(stock)
        .then((res) => {
            setItem(res.find( (item) => item.id === parseInt (idItem) ))
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false)
        })
    }, [idItem])

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