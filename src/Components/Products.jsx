import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Form extends Component {
  render() {
    return (
      <span data-testid="home-initial-message">
        <nav>
          <Link data-testid="shopping-cart-button" to="/shopcart">Carrinho</Link>
        </nav>
        Digite algum termo de pesquisa ou escolha uma categoria.
      </span>
    );
  }
}
