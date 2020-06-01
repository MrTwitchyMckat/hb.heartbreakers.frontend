import React, { Component } from "react";
import MasonryGrid from "./masonry-lookbook";

import Logo from "../../images/logo-background.svg";

class Lookbook extends Component {
  render() {
    return (
      <div id="lookbook" className="row">
        <div
          className="col-xs-12 justify-center lookbook__container"
          style={{ backgroundImage: `url('${Logo}')` }}
        >
          <div className="container">
            <div className="lookbook">
              <div className="lookbook__headline row">
                <div className="col-xs-12">
                  <h2>Lookbook</h2>
                  <span className="lookbook__subhead">// summer 2020</span>
                </div>
              </div>
              <MasonryGrid />
              <span className="end-page-icon"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lookbook;
