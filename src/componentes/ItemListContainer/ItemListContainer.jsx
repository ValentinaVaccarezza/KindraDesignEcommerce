import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import { ItemList } from './ItemList.jsx';
import { getStock } from '../helpers/getStock';

import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
 

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false); 
  const {categoryId} = useParams()

useEffect(() => {
  const db = getFirestore()
  const queryCollection = collection(db, 'items')
  if (categoryId) {
    const queryFilter = query(queryCollection, where('category', '==', categoryId))
    getDocs(queryFilter)
    .then(resp => setItems(resp.docs.map(item=>({id: item.id, ...item.data()}))))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  } else {
    getDocs(queryCollection)
    .then(resp => setItems(resp.docs.map(item=>({id: item.id, ...item.data()}))))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }



},[categoryId])


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







