import React, { Component } from 'react';
import '../css/Categories.css';

export default class Categories extends Component {
  render() {
    const { id, name, setCategory } = this.props;
    return (
      <div className="categories">
        <ul>
          <li>
            <label htmlFor={ id } data-testid="category">
              {name}
              <input
                type="radio"
                id={ id }
                name="category"
                onChange={ setCategory }
              />
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {}.isRequired;
