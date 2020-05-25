import React from 'react';
import styled from 'styled-components';

import { AppStateProvider } from '../appContext';
import ProductList from '../components/ProductList';
import Basket from '../components/Basket';
import Container from '../components/Container';
import Navbar from '../components/Navbar';

const Home = ({ className }) => {
  return (
    <>
      <Container>
        <Navbar />
        <ProductList />
      </Container>
    </>
  )
}

const StyledHome = styled(Home)`

`;

export default StyledHome;

