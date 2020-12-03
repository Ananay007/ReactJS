import React from "react";
import cartImg from "../../../public/img/emptycart.png";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1>Your Cart is Empty!</h1>
          <img src={cartImg} className="img-fluid" alt="cart"></img>
        </div>
      </div>
    </div>
  );
}
