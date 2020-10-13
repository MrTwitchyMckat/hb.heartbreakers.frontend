import React, { Component } from "react";
import $ from "jquery";

import closeIcon from "../../images/icons/close-icon.svg";

class DrawerNav extends Component {
  componentDidMount() {
    const drawerNav = $(".js-drawer");
    drawerNav.click(function () {
      drawerNav.addClass("closed");
    });
  }
  render() {
    return (
      <nav className="drawer-nav__container js-drawer closed">
        <span className="close-icon">
          <img src={closeIcon} alt="close menu" />
        </span>
        <div className="drawer-nav__items">
          <ul>
            <li className="icon-shopping">
              <a href="https://shop.heartbreakers.io" target="_blank">Online Shop</a>
            </li>
            <li className="icon-look">
              <a href="#lookbook">Lookbook</a>
            </li>
            <li className="icon-instagram">
              <a href="https://instagram.com/heartbreakers.io" target="blank">@heartbreakers.io</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default DrawerNav;
