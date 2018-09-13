import React, { Component } from 'react';
import './Cat.css';

class Cat extends Component {
    render() {
        return (
                <div class="tc mw-100 center bb">
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa4 ph5-l" href="/">Shop Home</a>
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa4 ph5-l" href="/portfolio">Male</a>
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa4 ph5-l" href="/shop">Female</a>
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa4 ph5-l" href="/about">Kids</a>
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa4 ph5-l" href="/contact">Sale</a>
                <a class="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa4 ph5-l" href="/contact">Coming Soon</a>
              </div>
        );
    }
}

export default Cat;