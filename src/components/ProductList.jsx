import React from 'react';
import styled from 'styled-components';
import { useAppState } from '../appContext';
import Item from './Item';

const ProductList = ({ className }) => {
  const [{products, basket}, dispatch] = useAppState();
  console.log('\n =========================>: ProductList -> basket', basket);
  return (
    <div className={className}>
      <ul>
        {products.map((product) => (
          <Item product={product} key={product.id}/>
        ))}
      </ul>
    </div>
  )
};

const StyledProductList = styled(ProductList)`
  
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
`;

export default StyledProductList;
