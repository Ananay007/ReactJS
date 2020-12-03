import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../data";
// import Product from "../Product/Product";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
    };
  }

  changeQty = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count += 1;
    this.setState(() => {
      return { cart: [...tempCart] };
    });
  };
  render() {
    return (
      <nav>
        <div className="logo">
          <i class="fas fa-mobile-alt fa-4x"></i>
        </div>
        <ul className="navbar">
          <li className="nav-items">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-items">About</li>
          <li className="nav-items">Shop</li>

          <Link to="/checkout">
            <button className="nav-btn">
              <i className="fas fa-cart-plus" />
              My Cart: <span>{this.state.cart.length}</span>
            </button>
          </Link>
        </ul>
      </nav>
    );
  }
}
