import React from "react";
import "./CartTotal.css";
export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal } = value;
  return (
    <React.Fragment>
      <div className="summary">
        <h4 className="border-bottom">Summary</h4>
        <div className="bill-section">
          <span className="sub-head">Subtotal: </span>
          <span className="pri">
            <strong> ₹ {cartSubTotal}</strong>
          </span>
        </div>
        <div className="bill-section border-bottom">
          <span className="sub-head">Tax: </span>
          <span> ₹ {cartTax}</span>
        </div>
        <div className="bill-section">
          <span className="sub-head">Total: </span>
          <span className="tag-double">
            <strong> ₹ {cartTotal}*</strong>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
