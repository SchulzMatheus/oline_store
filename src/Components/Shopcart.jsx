import { Component } from 'react';
import Cartlist from './cartList';

export default class Shopcart extends Component {
  state = {
    full: false,
    cardlist: [],
  };

  componentDidMount() {
    const savedCartItems = localStorage.getItem('cartSaved');
    if (savedCartItems !== null) {
      const cartItems = JSON.parse(savedCartItems);
      this.setState({ full: true, cardlist: cartItems });
    }
  }

  render() {
    const { full, cardlist } = this.state;
    return (
      <div>
        { full ? cardlist.map((item, value) => (
          <ul key={ `cartItem${value}` }>
            <Cartlist
              title={ item.title }
              price={ item.price }
              quantity={ item.quantity }
            />
          </ul>))
          : (
            <h1 data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </h1>)}
      </div>
    );
  }
}
