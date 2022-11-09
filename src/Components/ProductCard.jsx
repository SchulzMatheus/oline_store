import React, { Component } from 'react';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price}` }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {}.isRequired;
