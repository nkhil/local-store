import React from 'react';
import { useAppState } from '../appContext';
import useLocal from '../useLocal';

import BasketItem from './BasketItem';

const Basket = () => {
  useLocal();
  const [{basket}, dispatch] = useAppState();
  return (
    <>
      <ul>
        {basket && basket.map((product, index) => (
          <BasketItem product={product} key={index} />
        ))}
      </ul>
    </>
  )
}

export default Basket;
