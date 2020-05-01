import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {AppStateProvider} from './appContext';
import ProductList from './components/ProductList';
import Basket from './views/Basket';
import GlobalStyle from './components/GlobalStyles';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Home from './views/Home';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/basket'><Basket /></Route>
          </Switch>
      </Router>
    </>
  )
}

export default App;
