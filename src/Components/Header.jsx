import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import cartPng from '../images/carrinho.png';
import blackFriday from '../images/blackFriday.gif';
import '../css/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="mainHeader">
        <Link to="/">
          <h1><FaHome className="home" /></h1>
        </Link>
        <img className="blackFridaypng" src={ blackFriday } alt="blackFriday" />
        <nav>
          <Link data-testid="shopping-cart-button" to="/shopcart">
            <img className="cartPng" src={ cartPng } alt="Carrinho" />
          </Link>
        </nav>
      </header>
    );
  }
}
