import React from 'react';
import { useAppState } from '../appContext';

const ProductList = () => {
  const [{products}, dispatch] = useAppState();
  return (
    <>
      <ul>
        {products.map((product, index) => {
          return (
            <li 
              key={index}
              onClick={ () => dispatch ({ type: 'ADD_TO_BASKET', product })}
            >
              {product.name}
              {product.price}
            </li>
          )
        })}
      </ul>
    </>
  )
};

export default ProductList;
