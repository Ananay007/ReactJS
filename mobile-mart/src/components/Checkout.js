import React, { Component } from "react";
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./Cart/Cart";
import "./Checkout.css";
import PaymentCard from "./Payment/Payment-Card";
import ShippingDetailsCard from "./Shipping/ShippingDetailsCard";
export default class Checkout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="subnav-wrapper">
            <ul className="sub-navbar">
              <li>
                <NavLink to="/checkout">1. Shopping Cart</NavLink>
              </li>
              <li>
                <NavLink to="/ship">2. Shipping Details</NavLink>
              </li>
              <li>
                <NavLink to="/pay">3. Payment Option</NavLink>
              </li>
            </ul>
          </div>

          <Switch>
            <Route exact path="/checkout">
              <Cart />
            </Route>
            <Route exact path="/ship">
              <ShippingDetailsCard />
            </Route>
            <Route exact path="/pay">
              <PaymentCard />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
