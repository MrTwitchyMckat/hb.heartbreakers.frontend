import React, { Component } from "react";
import Logo from "../../logo-white.svg";
import LogoScrolled from "../../logo-scrolled.svg";
import $ from "jquery";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: Logo,
      menuBarColor: "white",
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    //Open menu
    const drawerNav = $(".js-drawer");
    const menuBar = $(".js-nav-button");
    menuBar.click(function () {
      drawerNav.removeClass("closed");
    });

    //Navigation scroll
    $(document).scroll(function () {
      const nav = $(".js-nav");
      nav.toggleClass("scrolled", window.scrollY >= 90);
    });

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    if (window.scrollY >= 90) {
      this.setState({
        logo: LogoScrolled,
        menuBarColor: "red",
      });
    }
    if (window.scrollY === 0 || window.scrollY < 90) {
      this.setState({
        logo: Logo,
        menuBarColor: "white",
      });
    }
  }

  render() {
    return (
      <div className="nav js-nav">
        <div className="nav__container">
          <div className="nav__logo">
            <img src={this.state.logo} alt="Heartbreakers Clothing Co." />
          </div>
          <div
            className={`nav__button js-nav-button ${this.state.menuBarColor}`}
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
