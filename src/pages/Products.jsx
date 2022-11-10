import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../Components/Categories';
import ProductCard from '../Components/ProductCard';
import SearchInput from '../Components/SearchInput';

export default class Products extends Component {
  state = {
    allCategories: [],
    categoryId: '',
    searchParam: '',
    searchResult: [],
    search: false,
  };

  async componentDidMount() {
    const allCategories = await getCategories();
    this.setState({ allCategories });
  }

  getItemsBy = (category, search) => {
    getProductsFromCategoryAndQuery(category, search)
      .then((resp) => this.setState({
        searchResult: resp.results,
        search: true,
      }));
  };

  setCategory = (e) => {
    const categoryId = e.target.id;
    const { searchParam } = this.state;
    this.setState({ categoryId });
    this.getItemsBy(categoryId, searchParam);
  };

  setSearch = ({ target }) => {
    const searchParam = target.value;
    this.setState({ searchParam });
  };

  getResults = () => {
    const { searchParam } = this.state;
    this.getItemsBy('', searchParam);
  };

  render() {
    const { allCategories, categoryId, searchParam, searchResult, search } = this.state;
    const controller = searchParam.length === 0 && categoryId.length === 0;
    const searchController = searchResult.length === 0 && search;
    return (
      <div data-testid="home-initial-message">
        <nav>
          <Link data-testid="shopping-cart-button" to="/shopcart">Carrinho</Link>
        </nav>
        <SearchInput
          searchParam={ searchParam }
          setSearch={ this.setSearch }
          getResults={ this.getResults }
        />
        { controller && 'Digite algum termo de pesquisa ou escolha uma categoria.' }
        { (searchController)
          ? <p>Nenhum produto foi encontrado</p>
          : searchResult.map((element) => (
            <ProductCard
              key={ element.id }
              id={ element.id }
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
      </div>
    );
  }
}
