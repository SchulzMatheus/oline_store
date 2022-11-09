import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import products from './Components/products';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ products } />
    </Switch>
  );
}

export default App;
