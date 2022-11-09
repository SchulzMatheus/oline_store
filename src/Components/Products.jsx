import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import Categories from './Categories';

export default class Products extends Component {
  state = {
    allCategories: [],
  };

  async componentDidMount() {
    const response = await getCategories();
    this.setState({
      allCategories: response,
    });
  }

  render() {
    const { allCategories } = this.state;
    return (
      <span data-testid="home-initial-message">
        <nav>
          <Link data-testid="shopping-cart-button" to="/shopcart">Carrinho</Link>
        </nav>
        Digite algum termo de pesquisa ou escolha uma categoria.
        <ul>
          { allCategories.map(({ id, name }) => (
            <Categories
              key={ id }
              name={ name }
              id={ id }
            />
          )) }
        </ul>
      </span>
    );
  }
}
