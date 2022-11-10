import React, { Component } from 'react';

export default class RatingStar extends Component {
  render() {
    const { num, userRating, handleRating } = this.props;
    const isNumEqual = (Number(num) <= Number(userRating));
    return (
      <input
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
