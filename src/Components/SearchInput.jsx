import React, { Component } from 'react';
import '../css/SearchInput.css';

export default class SearchInput extends Component {
  render() {
    const { searchParam, setSearch, getResults } = this.props;
    return (
      <div className="search">
        <input
          value={ searchParam }
          placeholder="Buscar"
          onChange={ setSearch }
          data-testid="query-input"
        />
        <button
          className="btn btn-warning"
          type="button"
          data-testid="query-button"
          onClick={ getResults }
        >
          Buscar
        </button>
      </div>
    );
  }
}

SearchInput.propTypes = {}.isRequired;
