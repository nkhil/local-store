import React from 'react';
import { useAppState } from '../appContext';
import useLocal from '../useLocal';

const Basket = () => {
  useLocal();
  const [{basket}, dispatch] = useAppState();
  return (
    <>
      <ul>
        {basket && basket.map((product, index) => {
          return (
            <li key={index}>{product.name} x {product.quantity}</li>
          )
        })}
      </ul>
    </>
  )
}

export default Basket;
