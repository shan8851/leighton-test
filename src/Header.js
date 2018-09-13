import React, { Component } from 'react';
import 'tachyons';



class Header extends Component {
    render() {
        return (
            <div class="dt w-100 bb">
            <div class="dtc w-10">
                 <div class="hide-child absolute ph5 pv5">
                 <a class="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">GB</a>
                     <div class="child absolute ba">
                            <div> <a class="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">FR</a></div>
                            <div> <a class="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">DE</a></div>
                            <div> <a class="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">IT</a></div>
                            <div> <a class="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">ES</a></div>
                    </div>
                </div>
            </div>
            <div class="dtc w-80 tc f2">
                 <h1 class="fw1">the <span class="red">leighton</span> shop</h1>
            </div>
            <div class="dtc w-10 v-mid">
            <a class="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">Basket (3)</a>
            </div>
        </div>
        );
    }
}
export default Header;