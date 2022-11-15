import React, { Component } from 'react';
import '../css/Details.css';

export default class UserRatings extends Component {
  render() {
    const { email, text, rating } = this.props;
    const compareRating = ['1', '2', '3', '4', '5'];
    return (
      <div className="ratedd">
        <h3 data-testid="review-card-email">{ email }</h3>
        <div className="rating-container" data-testid="review-card-rating">
          { compareRating.map((element) => {
            const whichClass = Number(element) <= Number(rating)
              ? 'rate black' : 'rate white';
            return (<div
              key={ `rate${rating}${Math.random()}` }
              className={ whichClass }
            />);
          }) }
        </div>
        <p data-testid="review-card-evaluation">{ text }</p>
      </div>
    );
  }
}

UserRatings.propTypes = {}.isRequired;
