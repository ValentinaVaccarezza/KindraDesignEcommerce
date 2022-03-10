import React from 'react';
import {stock}from '../../data/stock';

const getStock = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(stock)
    }, 2000)
  })
}

export default getStock