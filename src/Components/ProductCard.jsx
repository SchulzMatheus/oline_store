import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { id, title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <Link to={ `product-details/${id}` } data-testid="product-detail-link">
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {}.isRequired;
