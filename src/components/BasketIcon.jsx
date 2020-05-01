import React from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import styled from 'styled-components';
import { useAppState } from '../appContext';

const BasketIcon = ({ className }) => {
  
  const [{basket}, dispatch ] = useAppState();
  console.log('\n =========================>: BasketIcon -> basket', basket);

  return (
    <div className={className}>
      <FaShoppingBasket size={20} />
      <div className='counter'>{basket.length}</div>
    </div>
  )
}

const StyledBasketIcon = styled(BasketIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E8E8E8;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 50%;
  position: relative;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }

  .counter {
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    padding: 10px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export default StyledBasketIcon;
