import React, { Component } from "react";
import PaymentMethod from "./Payment";
import CartTotals from "../Cart/CartTotals";
import EmptyCart from "../Cart/EmptyCart";
import { ProductConsumer } from "../../context";
export default class PaymentDetailCard extends Component {
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
                    <PaymentMethod />
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
      //   <div className="payment-wrapper">
      //     <PaymentMethod />
      //   </div>
      // </div>
    );
  }
}
