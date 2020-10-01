import React, { Component } from "react";
import CTABox from "./cta-box";

import LeftImage from "../../images/left-cta-box.jpg";
import RightImage from "../../images/right-cta-box.jpg";

class CTABoxes extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-6 no-pad-marg">
              <CTABox image={LeftImage} title="Online Shop" />
            </div>
            <div className="col-sm-6 no-pad-marg">
              <CTABox
                image={RightImage}
                title="2020 Summer Look"
                link="#lookbook"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CTABoxes;
