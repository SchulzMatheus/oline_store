import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';
import ProductCard from './ProductCard';
import SearchInput from './SearchInput';

export default class Products extends Component {
  state = {
    allCategories: [],
    categoryId: '',
    searchParam: '',
    searchResult: [],
    busca: false,
  };

  async componentDidMount() {
    const allCategories = await getCategories();
    this.setState({ allCategories });
  }

  getItemsBy = (category, search) => {
    getProductsFromCategoryAndQuery(category, search)
      .then((resp) => this.setState({
        searchResult: resp.results,
        busca: true,
      }));
  };

  setCategory = (e) => {
    const categoryId = e.target.id;
    const { searchParam } = this.state;
    this.setState({ categoryId });
    this.getItemsBy(categoryId, searchParam);
  };

  setSearch = (e) => {
    const searchParam = e.target.value;
    this.setState({ searchParam });
  };

  getResults = () => {
    const { searchParam } = this.state;
    this.getItemsBy('', searchParam);
  };

  render() {
    const { allCategories, categoryId, searchParam, searchResult, busca } = this.state;
    return (
      <span data-testid="home-initial-message">
        <nav>
          <Link data-testid="shopping-cart-button" to="/shopcart">Carrinho</Link>
        </nav>
        <SearchInput
          searchParam={ searchParam }
          setSearch={ this.setSearch }
          getResults={ this.getResults }
        />
        { searchParam.length === 0 && categoryId.length === 0
          && 'Digite algum termo de pesquisa ou escolha uma categoria.' }

        { (searchResult.length === 0
          && busca)
          ? <p>Nenhum produto foi encontrado</p>
          : searchResult.map((element) => (
            <ProductCard
              key={ element.id }
              title={ element.title }
              thumbnail={ element.thumbnail }
              price={ element.price }
            />
          ))}
        <ul>
          { allCategories.map(({ id, name }) => (
            <Categories
              key={ id }
              name={ name }
              id={ id }
              setCategory={ this.setCategory }
            />
          )) }
        </ul>
      </span>
    );
  }
}
