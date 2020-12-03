import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import "./Details.css";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="image"></img>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2>Model: {title}</h2>
                  <div className="rating-made">
                    <span className="rating">
                      Rating:
                      <span className="fa fa-star checked ml-2"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </span>
                    <h6 className="">Made By: {company}</h6>
                  </div>
                  <div className="price-model border-bottom border-top">
                    <h4 className=" money">
                      <strong>
                        Price:
                        <span className="tag">₹{price}</span>
                      </strong>
                    </h4>
                    <select>
                      <option>Select Model</option>
                      <option>64gb</option>
                      <option>128gb</option>
                      <option>256gb</option>
                    </select>
                  </div>
                  <p>{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <button className="btn btn-white">
                        Back to Products
                      </button>
                    </Link>
                    <button
                      className="btn btn-night"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "In Bag" : "Add to Bag "}
                      <i className="fas fa-cart-plus" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="reviews">
                <h2 className="review-title">Reviews</h2>
                <div className="review">
                  <div className="user">
                    <div className="user-detail border-bottom">
                      <i className="fas fa-user fa-2x"></i>
                      <div className="user-details">
                        <span>JOHN DOE</span>
                        <span>14 August, 2018</span>
                        <span>Review: Good</span>
                      </div>
                    </div>
                    <p class="rev-para">
                      "Lorem ipsum dolor sit amet, cons Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="user">
                    <div className="user-detail">
                      <i class="fas fa-user fa-2x"></i>
                      <div className="user-details">
                        <span>WILL BANNER</span>
                        <span>20 October, 2019</span>
                        <span>Review: Good</span>
                      </div>
                    </div>
                    <p class="rev-para">
                      "Lorem ipsum dolor sit amet, cons Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
