import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="tc mw-100 center mt0 bg-dark-gray white">
        <a
          className="f6 f5-l link bg-animate white-80 hover-bg-light-red dib pa3 ph4-l"
          href="/"
        >
          work
        </a>
        .
        <a
          className="f6 f5-l link bg-animate white-80 hover-bg-light-red dib pa3 ph4-l"
          href="/portfolio"
        >
          services
        </a>
        .
        <a
          className="f6 f5-l link bg-animate white-80 hover-bg-light-red dib pa3 ph4-l"
          href="/shop"
        >
          insights
        </a>
        .
        <a
          className="f6 f5-l link bg-animate white-80 hover-bg-light-red dib pa3 ph4-l"
          href="/about"
        >
          blog
        </a>
        .
        <a
          className="f6 f5-l link bg-animate white-80 hover-bg-light-red dib pa3 ph4-l"
          href="/contact"
        >
          events
        </a>
        .
        <a
          className="f6 f5-l link bg-animate white-80 hover-bg-light-red dib pa3 ph4-l"
          href="/contact"
        >
          shop
        </a>
        .
        <a
          className="f6 f5-l link bg-animate white-80 hover-bg-light-red dib pa3 ph4-l"
          href="/contact"
        >
          contact
        </a>
      </nav>
    );
  }
}

export default Nav;
