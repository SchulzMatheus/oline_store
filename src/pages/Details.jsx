import React, { Component } from 'react';
import { getProductById } from '../services/api';
import RatingStar from '../Components/RatingStar';
import UserRatings from '../Components/UserRatings';
import { setItem, getItem } from '../services/localStorage';
import '../css/Details.css';
import Header from '../Components/Header';

export default class Details extends Component {
  state = {
    product: {},
    description: '',
    showDescription: false,
    userEmail: '',
    userRating: 0,
    userDescription: '',
    appearIfError: false,
    allRatings: [],
    productImg: '',
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const request = await getProductById(id);
    const allRatings = getItem(id) ? JSON.parse(getItem(id)) : [];
    this.setState({ allRatings });
    this.setState(
      {
        product: request,
        productImg: request.pictures[0].url,
      },
      () => this.setDescription()
    );
  }

  setDescription() {
    const { product } = this.state;
    const attrs = product.attributes;

    const descricao = attrs.map((att) => (
      <li key={ att.id }>
        {att.name}
        {': '}
        {att.value_name}
      </li>
    ));

    this.setState({
      showDescription: true,
      description: descricao,
    });
  }

  handleEmail = (e) => {
    this.setState({ userEmail: e.target.value });
  };

  handleRating = (e) => {
    this.setState({ userRating: e.target.value });
  };

  handleDescription = (e) => {
    this.setState({ userDescription: e.target.value });
  };

  saveToLocalStorage = () => {
    const { product, allRatings } = this.state;
    setItem(product.id, allRatings);
  };

  handleClick = () => {
    const { product } = this.state;
    const { title, price, id } = product;
    const savedCartItems = getItem('cartSaved');
    let cartItems = [];

    if (savedCartItems === null) {
      const produtoAdded = { title, price, id, quantity: 1 };

      cartItems = [produtoAdded];
    } else {
      cartItems = JSON.parse(savedCartItems);
      let nextItemControl = true;
      cartItems
        .filter((item) => item.id === id)
        .forEach((item) => {
          nextItemControl = false;
          item.quantity += 1;
        });
      if (nextItemControl) {
        const produtoAdded = { title, price, id, quantity: 1 };
        cartItems.push(produtoAdded);
      }

      setItem('cartSaved', cartItems);
    }

    setItem('cartSaved', cartItems);
  };

  handleSubmitButton = () => {
    const {
      userEmail: email,
      userDescription: text,
      userRating: rating,
      allRatings,
    } = this.state;
    if (email.length === 0 || rating === 0) {
      return this.setState({ appearIfError: true });
    }
    this.setState(
      {
        allRatings: [...allRatings, { email, text, rating }],
        appearIfError: false,
        userEmail: '',
        userDescription: '',
        userRating: '',
      },
      this.saveToLocalStorage
    );
  };

  render() {
    const {
      product,
      description,
      showDescription,
      userEmail,
      userRating,
      userDescription,
      allRatings,
      appearIfError,
      productImg,
    } = this.state;
    const { title, price } = product;
    const avalBoxes = ['1', '2', '3', '4', '5'];
    console.log(productImg);
    return (
      <div>
        <Header />
        <h1 data-testid="product-detail-name">{title}</h1>
        <p data-testid="product-detail-price">{price}</p>
        <img src={ productImg } alt={ title } data-testid="product-detail-image" />

        <p>Especificacoes tecnicas</p>
        {showDescription && description}

        <div data-testid="shopping-cart-button">Cart</div>
        <div>
          <h2>Avaliações</h2>
          <form>
            {appearIfError && <p data-testid="error-msg">Campos inválidos</p>}
            <input
              type="email"
              placeholder="Email"
              data-testid="product-detail-email"
              onChange={ this.handleEmail }
              value={ userEmail }
            />
            <div>
              {avalBoxes.map((num) => (
                <RatingStar
                  key={ `nota${num}` }
                  handleRating={ this.handleRating }
                  userRating={ userRating }
                  num={ num }
                />
              ))}
            </div>
            <textarea
              placeholder="Mensagem (opcional)"
              data-testid="product-detail-evaluation"
              value={ userDescription }
              onChange={ this.handleDescription }
            />
            <button
              className="btn btn-primary"
              type="button"
              data-testid="submit-review-btn"
              onClick={ this.handleSubmitButton }
            >
              Avaliar
            </button>
          </form>
          <div className="rated">
            {allRatings.map(({ email, text, rating }) => (
              <UserRatings
                key={ `${email}-rating${Math.random()}` }
                email={ email }
                text={ text }
                rating={ rating }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {}.isRequired;
