import React from 'react';
import { AppStateProvider } from '../appContext';
import ProductList from '../components/ProductList';
import Basket from '../components/Basket';
import GlobalStyle from '../components/GlobalStyles';
import Container from '../components/Container';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <AppStateProvider>
          <Container>
            <Navbar />
            <ProductList />
            <h1>Basket</h1>
            <Basket />
          </Container>
      </AppStateProvider>
    </>
  )
}

export default Home;
