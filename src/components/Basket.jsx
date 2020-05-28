import React from 'react';
import { useAppState } from '../appContext';
import useLocal from '../useLocal';
import { convertPenniesToPounds } from '../helpers/currencyConverter';

import BasketItem from './BasketItem';

const Basket = () => {
  useLocal();
  const [{basket}, dispatch] = useAppState();
  
  const basketTotalPrice = basket.reduce((acc, item) => {
    const pricePerItem = item.price * item.quantity;
    return acc + pricePerItem;
  }, 0);

  return (
    <>
      <ul>
        {basket && basket.map((product, index) => (
          <BasketItem product={product} key={index} />
        ))}
      </ul>
      <h2>Total: £{convertPenniesToPounds(basketTotalPrice)}</h2>
    </>
  )
}

export default Basket;
