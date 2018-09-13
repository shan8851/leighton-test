import React, { Component } from 'react';
import 'tachyons';

class Nav extends Component {
    render() {
        return (
            <nav class="tc mw-100 center mt0 bg-dark-gray ">
            <a class="f6 f5-l link bg-animate white-80 hover-bg-light-red dib pa3 ph4-l" href="/">work</a>
            <a class="f6 f5-l link bg-animate white-80 hover-bg-light-red dib pa3 ph4-l" href="/portfolio">services</a>
            <a class="f6 f5-l link bg-animate white-80 hover-bg-light-red dib pa3 ph4-l" href="/shop">insights</a>
            <a class="f6 f5-l link bg-animate white-80 hover-bg-light-red dib pa3 ph4-l" href="/about">blog</a>
            <a class="f6 f5-l link bg-animate white-80 hover-bg-light-red dib pa3 ph4-l" href="/contact">events</a>
            <a class="f6 f5-l link bg-animate white-80 hover-bg-light-red dib pa3 ph4-l" href="/contact">shop</a>
            <a class="f6 f5-l link bg-animate white-80 hover-bg-light-red dib pa3 ph4-l" href="/contact">contact</a>
          </nav>
        );
    }
}

export default Nav;