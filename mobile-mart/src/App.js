import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import ProductsList from "./components/Products-list/Products-list";
import Details from "./components/Details";
import Checkout from "./components/Checkout";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Orderplaced from "./components/OrderPlaced";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductsList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/order" component={Orderplaced}></Route>

          <Route component={Default}></Route>
        </Switch>
        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
