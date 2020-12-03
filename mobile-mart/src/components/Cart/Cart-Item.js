import React from "react";
import "./Cart-Item.css";

export default function CartItem({ item, value }) {
  const { id, title, img, price, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="container-fluid">
      <div className="holder">
        <div className="shop-cart-col">
          <h4>Shopping Cart</h4>
          <div className="product">
            <div className="img-details">
              <img
                src={img}
                style={{ width: "5rem", height: "5rem" }}
                className="img-fluid"
                alt="product-pic"
              />
              <div className="product-details">
                {title}
                <span>
                  Price <span className="tag">₹{price}* </span>
                </span>
              </div>
            </div>
            <div className="remove-add-button">
              <div>
                <span
                  className="btn btn-black mx-1"
                  onClick={() => decrement(id)}
                >
                  -
                </span>
                <span className="btn btn-black mx-1">{count}</span>
                <span
                  className="btn btn-black mx-1"
                  onClick={() => increment(id)}
                >
                  +
                </span>
              </div>
              <div className="cart-icon" onClick={() => removeItem(id)}>
                <i className="fas fa-trash"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
