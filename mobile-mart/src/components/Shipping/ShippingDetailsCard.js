import React, { Component } from "react";
import ShippingDetails from "./ShippingDetails";
import { ProductConsumer } from "../../context";
import CartTotals from "../Cart/CartTotals";
import EmptyCart from "../Cart/EmptyCart";

export default class ShippingDetailCard extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <div className="d-flex justify-content-between">
                    <ShippingDetails />
                    <CartTotals value={value} />
                  </div>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
      // <div className="container">
      //   <div className="ShippingDetailCard-wrapper">
      //     <ShippingDetails />
      //   </div>
      // </div>
    );
  }
}
