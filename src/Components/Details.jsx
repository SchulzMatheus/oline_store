import React, { Component } from 'react';
import { getProductById } from '../services/api';

export default class Details extends Component {
  state = {
    product: {},
    description: '',
    showDescription: false,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const request = await getProductById(id);
    console.log(request);

    this.setState({
      product: request,
    }, () => this.setDescription());
  }

  setDescription() {
    const { product } = this.state;
    const attrs = product.attributes;

    const descricao = attrs.map((att) => (
      <li key={ att.id }>
        {att.name}
        {': '}
        {att.value_name}
      </li>));

    this.setState({
      showDescription: true,
      description: descricao,
    });
  }

  render() {
    const { product, description, showDescription } = this.state;
    const { title, price, thumbnail } = product;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <p data-testid="product-detail-price">{ price }</p>
        <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />

        <p>Especificacoes tecnicas</p>
        { showDescription && description }

        <div data-testid="shopping-cart-button">
          Cart
        </div>
      </div>
    );
  }
}

Details.propTypes = {}.isRequired;
