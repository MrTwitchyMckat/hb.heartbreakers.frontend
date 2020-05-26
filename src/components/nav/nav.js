import React, { Component } from "react";
import Logo from "../../logo-white.svg";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__container">
          <div className="nav__logo">
            <img src={Logo} alt="Heartbreakers Clothing Co." />
          </div>
          <div className="nav__button js-nav-button">
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
