import React, { Component } from "react";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./Cart-list";
import CartTotals from "./CartTotals";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <div className="d-flex justify-content-between flex-fill">
                    <CartList value={value} />
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
    );
  }
}
