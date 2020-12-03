import React from "react";
import CartItem from "./Cart-Item";
import { Link } from "react-router-dom";
export default function CartList({ value }) {
  const { cart } = value;
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} value={value} />;
      })}
      <Link to="/ship">
        <button className="btn btn-night">Next</button>
      </Link>
    </div>
  );
}
