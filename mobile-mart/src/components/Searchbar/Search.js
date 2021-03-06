import React from "react";

// import { storeProducts, detailProduct } from "../../data";
import { NavLink } from "react-router-dom";
import "./Search.css";

import data from "../../data";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
  }

  filter = () => {
    let filter_txt = document.getElementById("search-box").value.toUpperCase();
    let blocks = document.getElementsByClassName("product-block");
    for (let i = 0; i < blocks.length; i++) {
      let name = blocks[i].innerText.split("\n")[0].toUpperCase();
      if (name.indexOf(filter_txt) > -1) blocks[i].style.display = "";
      else blocks[i].style.display = "none";
    }
  };

  render() {
    let ele = null;
    let temp = this.props.handler;
    if (this.state.data) {
      ele = this.state.data.map(function (e, idx) {
        return (
          <div key={idx} className="product-block">
            <div className="container">
              <div className="wrapper">
                <div className="image">
                  <img
                    className="prod-img"
                    src={e["img"]}
                    alt={e["title"]}
                    align="center"
                  />
                </div>
                <div class="button">
                  <button
                    onClick={() => {
                      temp(e, 1);
                    }}
                  >
                    {" "}
                    Add To Cart{" "}
                  </button>
                </div>

                <div className="info-price">
                  <NavLink to="./details">
                    <a
                      href="/details"
                      className="pro-name"
                      id="product-name"
                      onClick={() => {
                        temp(e, 0);
                      }}
                      id={e["id"]}
                    >
                      {e["title"]}
                    </a>
                  </NavLink>

                  <span>{e["info"]}</span>
                  <span>${e["price"]}</span>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="container">
        <div className="product-container">
          <div className="search-box">
            <h1>Mobile Mart</h1>
            <input
              type="text"
              id="search-box"
              onKeyUp={this.filter}
              placeholder="Search..."
            />
            <button>Submit</button>
          </div>
          <div className="products">
            {/* <h2>Products Listing</h2>
            <p className="lead">
              loremloremloremloremloremloremloremloremloremloremloremloremlorem
            </p> */}
            <div className="product-wrapper">{ele}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBar;
