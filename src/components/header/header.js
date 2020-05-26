import React, { Component } from "react";
import Twenty from "../../images/2020-header.svg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__content">
          <div className="header__title">
            <h1>Summer 2020</h1>
          </div>
        </div>
        <div className="header__year">
          <img src={Twenty} alt="2020 Heart Breakers Clothing Co" />
        </div>
        <div className="header__scroll">
          <span className="header__scroll-text">scroll</span>
          <span className="header__scroll-line"></span>
        </div>
      </div>
    );
  }
}

export default Header;
