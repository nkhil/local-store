import React, { createContext, useContext, useReducer } from 'react';
import PRODUCTS from './constants/products';
import addProductToBasket from './helpers/addProductToBasket';

const AppContext = createContext();

const appStateReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TO_BASKET': {
      return {
        ...state,
        basket: addProductToBasket(state.basket, action.product),
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
