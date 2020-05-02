import React, { createContext, useContext, useReducer } from 'react';
import PRODUCTS from './constants/products';
import { addProductToBasket, deductProductFromBasket } from './helpers/basketHelper';

const AppContext = createContext();

export const actions = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  INCREMENT_ITEM: 'INCREMENT_ITEM',
  DECREMENT_ITEM: 'DECREMENT_ITEM',
  GET_FROM_LOCAL_STATE: 'GET_FROM_LOCAL_STATE',
};

const appStateReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TO_BASKET':
    case 'INCREMENT_ITEM': {
      const newBasketState = addProductToBasket(state.basket, action.product);
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
    case 'DECREMENT_ITEM': {
      const newBasketState = deductProductFromBasket(state.basket, action.product);
      localStorage.setItem('basket', JSON.stringify(newBasketState)); 
      return {
        ...state,
        basket: newBasketState,
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
