import React, { Component } from 'react';
import 'tachyons';



class Header extends Component {
    render() {
        return (
            <div class="dt w-100 bb">
                <div class="dtc w-80 tc f2">
                     <h1 class="fw1">the <span class="red">leighton</span> shop</h1>
                </div>
            </div>
        );
    }
}
export default Header;