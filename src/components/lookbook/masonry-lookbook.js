import React, { Component } from "react";
import $ from "jquery";
import jQueryBridget from "jquery-bridget";
import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";

class MasonryLookbook extends Component {
  importAll(r) {
    return r.keys().map(r);
  }

  shuffleArray(arr) {
    let ctr = arr.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arr[ctr];
      arr[ctr] = arr[index];
      arr[index] = temp;
    }

    return arr;
  }

  componentDidMount() {
    // init Masonry
    var grid = document.querySelector(".grid");

    var msnry = new Masonry(grid, {
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
    });

    imagesLoaded(grid).on("progress", function () {
      // layout Masonry after each image loads
      msnry.layout();
    });
  }

  render() {
    //Get array of images
    let images = this.importAll(
      require.context("../../images/grid-images/", false, /\.(png|jpe?g|svg)$/)
    );
    //Shuffle the images
    images = this.shuffleArray(images);

    return (
      <div className="grid">
        <div className="grid-sizer"></div>
        {images.map((url, index) => {
          return (
            <div className="grid-item">
              <img
                src={url}
                alt="Lookbook Image"
                key={index}
                className="masonry-img"
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MasonryLookbook;
