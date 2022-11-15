import React, { Component } from 'react';
import '../css/RatingStar.css';

export default class RatingStar extends Component {
  render() {
    const { num, userRating, handleRating } = this.props;
    const isNumEqual = (Number(num) <= Number(userRating));
    return (
      <input
        className="rating"
        type="radio"
        onClick={ handleRating }
        value={ num }
        checked={ isNumEqual }
        onChange={ () => {} }
        data-testid={ `${Number(num)}-rating` }
      />
    );
  }
}

RatingStar.propTypes = {}.isRequired;
