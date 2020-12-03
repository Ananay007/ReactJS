import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="link-tags">
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-mobile-alt"></i>
              </a>
            </li>
          </ul>
        </div>
        &copy; Mobile Mart , Made By Ananay, TO THE NEW
      </div>
    );
  }
}
