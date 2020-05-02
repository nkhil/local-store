import React from 'react';
import styled from 'styled-components';
import { AppStateProvider } from '../appContext';
import Basket from '../components/Basket';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import GlobalStyle from '../components/GlobalStyles';

const BasketView = ({ className }) => {
  return (
    <>
      <AppStateProvider>
        <Container>
          <Navbar />
          <div className={className}>
            <h1>Your Basket</h1>
            <Basket />
          </div>
        </Container>
      </AppStateProvider>
    </>
  )
}

const StyledBasketView = styled(BasketView)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledBasketView;
