import React from 'react';
import styled from 'styled-components';
import { useAppState } from '../appContext';
import Button from './Button';

const Item = ({ product, className }) => {
  const { name, additionalName, id, price, attributes: { weight }} = product;
  const [, dispatch] = useAppState();
  return (
    <div className={className}>
      <li key={id}>
        <h2>{name}</h2>
        <p>{additionalName}</p>
        <h3>{weight.weight}{weight.unit} - ₹{price}</h3>
        <Button text={'Add to basket'} onClick={() => dispatch ({ type: 'ADD_TO_BASKET', product })}/>
      </li>
    </div>
  )
}

const StyledItem = styled(Item)`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap');
  font-family: 'Poppins', sans-serif;
  background-color: #F6F6F6;
  margin: 10px;
  min-width: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  li {
    list-style-type: none;
    padding: 20px;
    border-radius: 5px;

    h2 {
      margin: 0 0 3px 0;
    }

    p {
      margin: 0;
      line-height: 1.4;
      color: #5F5F5F;
      margin-bottom: 3px;
    }

    h3 {
      margin: 10px 0;
      color: #5F5F5F;
      font-size: 1rem;
      font-weight: 300;
    }
  }
`;

export default StyledItem;
