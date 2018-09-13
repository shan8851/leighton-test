import React, { Component } from 'react';
import 'tachyons';
import ReactCountryFlag from "react-country-flag";


class Header extends Component {
    render() {
        return (
            <div class="hide-child absolute ba ma4">
                <ReactCountryFlag code="uk" svg />
    <div class="child absolute ba">
        <div> de </div>
        <div > it </div>
        <div > es </div>
    </div>
  </div>
        );
    }
}

export default Header;