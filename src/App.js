import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Products from './Components/Products';
import Shopcart from './Components/Shopcart';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Products } />
      <Route exact path="/shopcart" component={ Shopcart } />
    </Switch>
  );
}

export default App;
