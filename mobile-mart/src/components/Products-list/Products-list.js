import React, { Component } from "react";
import Products from "../Product/Product";
import Title from "../Title/title";
import { ProductConsumer } from "../../context";
import "./Products-list.css";
import SearchBar from "../Searchbar/Search";

export default class ProductsList extends Component {
  //   state = {
  //     products: storeProducts,
  //   };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <SearchBar />
          <div className="body-head">
            <Title name="Our Products" />
          </div>
          <div className="list-products">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Products key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
    //<Products />;
  }
}
