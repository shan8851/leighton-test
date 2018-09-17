import React, { Component } from "react";

class Cat extends Component {
  render() {
    return (
      <div className="tc mw-100 center bb">
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa4 ph5-l"
          href="/"
        >
          Shop Home
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa4 ph5-l"
          href="/portfolio"
        >
          Male
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa4 ph5-l"
          href="/shop"
        >
          Female
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa4 ph5-l"
          href="/about"
        >
          Kids
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa4 ph5-l"
          href="/contact"
        >
          Sale
        </a>
        <a
          className="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa4 ph5-l"
          href="/contact"
        >
          Coming Soon
        </a>
      </div>
    );
  }
}

export default Cat;
