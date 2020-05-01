import React from 'react';
import { AppStateProvider } from '../appContext';
import Basket from '../components/Basket';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import GlobalStyle from '../components/GlobalStyles';

const BasketView = () => {
  return (
    <>
      <GlobalStyle />
      <AppStateProvider>
        <Container>
          <Navbar />
          <h1>Basket</h1>
          <Basket />
        </Container>
      </AppStateProvider>
    </>
  )
}

export default BasketView;
