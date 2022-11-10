import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Products from './Components/Products';
import Shopcart from './Components/Shopcart';
import Details from './Components/Details';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Products } />
      <Route exact path="/shopcart" component={ Shopcart } />
      <Route exact path="/product-details/:id" component={ Details } />
    </Switch>
  );
}

export default App;
