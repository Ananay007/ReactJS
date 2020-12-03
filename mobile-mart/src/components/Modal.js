import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 
                             pd-5 text-center"
                    >
                      <h5>
                        Item Added to Cart{" "}
                        <i className="fas fa-check-circle"></i>
                      </h5>
                      <img src={img} className="img-fluid" alt="product"></img>
                      <h5>{title}</h5>
                      <Link to="/">
                        <button
                          className="btn btn-blue"
                          onClick={() => closeModal()}
                        >
                          Continue Shopping
                        </button>
                      </Link>
                      <Link to="/checkout">
                        <button
                          className="btn btn-night"
                          onClick={() => closeModal()}
                        >
                          Go to Cart <i className="fas fa-cart-plus"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rbga(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    border: 0.05rem solid #555;
    border-radius: 2%;
    background: white;
    h5 {
      .fas {
        color: green;
        margin-top: 10px;
        font-size: 1.6rem;
      }
    }
  }
  .btn-blue {
    color: white;
    background: rgb(30, 81, 192);
    // margin-bottom: 10px;
    &:hover {
      color: rgb(30, 81, 192);
      background: white;
      border: 0.06rem solid rgb(30, 81, 192);
    }
  }
`;
