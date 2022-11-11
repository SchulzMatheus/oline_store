import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setItem, getItem } from '../services/localStorage';

export default class ProductCard extends Component {
  handleClick = () => {
    const { title, price, id } = this.props;
    const savedCartItems = getItem('cartSaved');
    let cartItems = [];

    if (savedCartItems === null) {
      const product = { title, price, id, quantity: 1 };

      cartItems = [product];
    } else {
      cartItems = JSON.parse(savedCartItems);
      let nextItemControl = true;
      cartItems.filter((item) => item.id === id).forEach((item) => {
        nextItemControl = false;
        item.quantity += 1;
      });
      if (nextItemControl) {
        const product = { title, price, id, quantity: 1 };
        cartItems.push(product);
      }

      setItem('cartSaved', cartItems);
    }

    setItem('cartSaved', cartItems);
  };

  render() {
    const { id, title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <Link to={ `product-details/${id}` } data-testid="product-detail-link">
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {}.isRequired;
