import React, { Component } from "react";

class CTABox extends Component {
  render(title, image) {
    return (
      <a href={this.props.link}>
        <div
          className="cta-box__container row center middle-xs"
          style={{ backgroundImage: "url(" + this.props.image + ")" }}
        >
          <div className="col-xs-12">
            <p className="cta-box__text">{this.props.title}</p>
          </div>
        </div>
        <div className="background-overlay"></div>
      </a>
    );
  }
}

export default CTABox;
