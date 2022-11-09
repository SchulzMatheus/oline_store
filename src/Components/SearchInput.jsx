import React, { Component } from 'react';

export default class SearchInput extends Component {
  render() {
    const { searchParam, setSearch, getResults } = this.props;
    return (
      <div>
        <input
          value={ searchParam }
          placeholder="Buscar"
          onChange={ setSearch }
          data-testid="query-input"
        />
        <button
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
