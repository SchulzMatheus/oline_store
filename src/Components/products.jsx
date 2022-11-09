import { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <span data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </span>
    );
  }
}
