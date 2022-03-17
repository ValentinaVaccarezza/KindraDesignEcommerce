import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import { stock } from '../../data/stock.jsx';
import { listArray } from '../helpers/listArray.jsx';
import { ItemList } from './ItemList.jsx';
import { getStock } from '../helpers/getStock';
 

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false); 
  const {idCategory} = useParams()

  useEffect(() => {
  setLoading(true)
  listArray(stock)
  .then((res) => {
    idCategory?
    setItems(res.filter ( (item)=> item.category === idCategory))
    :
    setItems(res)
  })
  .catch((err)=>console.log(err))
  .finally(()=>{
    setLoading(false)
  })
}, [])

return (
  <div className="item-list-container">
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







