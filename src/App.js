import React, { useContext } from 'react';
import './App.css';
import {AppStateProvider} from './appContext';
import ProductList from './components/ProductList';
import Basket from './components/Basket';

const App = () => {
  return (
    <AppStateProvider>
      <h1>Products</h1>
      <ProductList />
      <h1>Basket</h1>
      <Basket />
      <ul><li>Something comes her</li><li>Something else</li></ul>
    </AppStateProvider>
  )
}

export default App;
