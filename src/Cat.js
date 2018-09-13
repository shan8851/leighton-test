import React, { Component } from 'react';
import './Cat.css';

class Cat extends Component {
    render() {
        return (
            <div className="cat">
                <ul>
                    <li><a href="default.asp">Shop home</a></li>
                    <li><a href="news.asp">Male<img src="drop.svg" height="8" width="8"></img></a></li>
                    <li><a href="contact.asp">Female</a></li>
                    <li><a href="about.asp">Kids</a></li>
                    <li><a href="about.asp">Sale</a></li>
                    <li><a href="about.asp">Coming Soon</a></li>
                </ul>
            </div>
        );
    }
}

export default Cat;