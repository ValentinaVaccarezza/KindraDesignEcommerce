import React, { useEffect, useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount.jsx';
import './ItemListContainer.css';
import { stock } from '../../data/stock.jsx';
import { listArray } from '../helpers/listArray.jsx';
import { ItemList } from './ItemList.jsx';


const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
  setLoading(true)
  listArray(stock)
  .then((res) => {
    setItems(res)
  })
  .catch((err)=>console.log(err))
  .finally(()=>{
    setLoading(false)
  })
}, [])

return (
  <div className="item-list">
    {
      loading? 
      <div className="cargando">Cargando productos...</div>
      :
      <ItemList items={items}/>
    }
  </div>
)
}

export { ItemListContainer }







