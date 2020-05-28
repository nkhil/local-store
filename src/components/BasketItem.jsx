import React from 'react';
import styled from 'styled-components';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { convertPenniesToPounds } from '../helpers/currencyConverter';

import { useAppState } from '../appContext'

const BasketItem = ({ className, product }) => {
  const [{basket}, dispatch] = useAppState();
  const { name, price, quantity, attributes: {weight: { weight, unit }} } = product;
  return (
    <>
      <li className={className}>
        <div className={'product-name'}>{name} ({weight} {unit})</div> 
        <FaMinusCircle size={15} color='#33A753' onClick={ () => dispatch ({ type: 'DECREMENT_ITEM', product }) }/>
        {quantity}
        <FaPlusCircle size={15} color='#33A753' onClick={ () => dispatch ({ type: 'INCREMENT_ITEM', product }) }/>
        <div className={'product-price'}>£{convertPenniesToPounds(price * quantity)}</div>
      </li>
    </>
  )
}

const StyledBasketItem = styled(BasketItem)`
  display: flex;
  width: 500px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 5px 0;
  font-size: 1.4rem;
  font-weight: 600;

  .product-name {
    width: 300px;
  }

  @media screen and (max-width: 599px) {
    width: 400px;
    font-size: 1rem;

    .product-name {
    width: 150px;
  }
  }
`;

export default StyledBasketItem;
