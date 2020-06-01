import React, { Component } from "react";
import Logo from "../../logo-white.svg";

class Footer extends Component {
  render() {
    return (
      <div className="row footer">
        <div className="col-xs-12 justify-center">
          <div className="container justify-center flex-column">
            <div className="footer__logo">
              <img src={Logo} alt="heartbreakers clothing company" />
            </div>
            <div className="footer__site-links">
              <ul>
                <li className="icon-account">
                  <a href="https://heartbreakers.io/account">Account</a>
                </li>
                <li className="icon-shopping">
                  <a href="https://heartbreakers.io">Online Shop</a>
                </li>
                <li className="icon-look">
                  <a href="#lookbook">Lookbook</a>
                </li>
              </ul>
            </div>
            <div className="footer__copyright">
              <span>
                © {new Date().getFullYear()} Heartbreakers Clothing Co.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
