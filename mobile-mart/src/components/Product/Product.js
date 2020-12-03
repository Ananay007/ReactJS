import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import "./Product.css";

export default class Products extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="ProductWrapper Main-holder my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container pd-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img
                    src={img}
                    alt="product-img"
                    className="card-img-top fluid"
                  ></img>
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p
                      className="mb-0 pd-2"
                      disabled
                      onClick={() => alert("Already in Cart!")}
                    >
                      Added &#9989;
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus"></i>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue mb-0">
              <span className="mr-1">₹</span>
              {price}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
