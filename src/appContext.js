import React, { createContext, useContext, useReducer } from 'react';
import PRODUCTS from './constants/products';
import addProductToBasket from './helpers/addProductToBasket';

const AppContext = createContext();

const appStateReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TO_BASKET': {
      let newBasketState = addProductToBasket(state.basket, action.product);
      localStorage.setItem('basket', JSON.stringify(newBasketState));
      return {
        ...state,
        basket: newBasketState,
      }
    }
    case 'GET_FROM_LOCAL_STATE': {
      return {
        ...state,
        basket: action.basket,
      }
    }
    default:
      return state;
  }
}

const initialState = {
  products: PRODUCTS,
  basket: [],
}

export function useAppState() {
  return useContext(AppContext);
}

export function AppStateProvider({children}) {

  let cake = useReducer(appStateReducer, initialState);
  return <AppContext.Provider value={cake}>{children}</AppContext.Provider>
}
