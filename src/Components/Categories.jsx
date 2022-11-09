import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Categories extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <li>
        <label htmlFor={ id } data-testid="category">
          <input type="radio" id={ id } name="category" />
          { name }
        </label>
      </li>
    );
  }
}

Categories.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
}.isRequired;
