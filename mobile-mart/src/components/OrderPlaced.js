import React, { Component } from "react";
import Greentick from "../../public/img/green.webp";
import { Link } from "react-router-dom";

export default class OrderPlaced extends Component {
  render() {
    console.log("rendered");
    return (
      <div className="container-fluid mt-4">
        <div className="d-flex flex-column mb-3 text-center">
          <div>
            <h1 style={{ color: "green", textAlign: "center" }}>
              ORDER PLACED SUCCESSFULLY!
            </h1>
            <img
              src={Greentick}
              className="img-fluid"
              style={{ width: "250px", height: "250px" }}
              alt="successful!"
            ></img>
            <div className="mt-3">
              <Link to="/">
                <button className="btn btn-blue">Continue Shopping</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
