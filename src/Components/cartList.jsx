import React, { Component } from 'react';

export default class Categories extends Component {
  render() {
    const { title, price, quantity } = this.props;
    return (
      <li>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{`R$ ${price}`}</p>
        <p data-testid="shopping-cart-product-quantity">
          {`Quantidade: ${quantity}`}
        </p>
      </li>
    );
  }
}

Categories.propTypes = {}.isRequired;
