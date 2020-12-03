import React, { Component } from "react";
import "./ShippingDetails.css";
import { Link } from "react-router-dom";

export default class ShippingDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email;
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Personal Details Submitted!");
    } else {
      alert("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render() {
    let temp = this.props.handler;
    return (
      <div className="container">
        <div className="wrapper-shipping">
          <h2>Shipping Details </h2>
          <form action="/pay" onSubmit={this.contactSubmit.bind(this)}>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Full Name"
              required
              onChange={this.handleChange.bind(this, "name")}
              value={this.state.fields["name"]}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={this.handleChange.bind(this, "email")}
              value={this.state.fields["email"]}
            />
            <br />
            <input
              type="text"
              name="address"
              id="address"
              placeholder=" Address Line 1"
            />
            <br />
            <input
              type="text"
              name="address2"
              id="address2"
              placeholder=" Address Line 2"
            />
            <br />
            <select id="opt-sel">
              <option value="">Country</option>
              <option value="India">India</option>
              <option value="Mexico">USA</option>
              <option value="Australia">Australia</option>
              <option value="Thailand">Thailand</option>
            </select>
            <input type="text" id="city" name="city" placeholder="City"></input>
            <br />
            <input
              type="number"
              id="zip"
              name="zip"
              placeholder="Zip/Postal Code"
            ></input>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone Number"
            ></input>
            <div className="shipping-buttons">
              <div className="free-shipping">
                <input
                  type="radio"
                  name="shipping"
                  onClick={function () {
                    temp(0);
                  }}
                />
                {/* <label htmlFor="free-shipping"> */}
                <span>Free Shipping[2-4 days]</span>

                {/* </label> */}
              </div>
              <div className="next-day">
                <input
                  type="radio"
                  name="shipping"
                  onClick={function () {
                    temp(1);
                  }}
                />
                {/* <label htmlFor="next-day"> */}
                <span>Next Day Delivery - ₹20</span>

                {/* </label> */}
              </div>
            </div>

            <button className="btn btn-night">Next</button>

            <Link to="/checkout">
              <button className=" btn btn-white">Cancel</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
