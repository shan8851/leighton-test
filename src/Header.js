import React, { Component } from 'react';
import 'tachyons';



class Header extends Component {
    render() {
        return (
            <div class="fl w-10 ma4">
                 <div class="hide-child absolute">
                 <a class="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">GB</a>
                     <div class="child absolute ba">
                            <div> <a class="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">FR</a></div>
                            <div> <a class="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">DE</a></div>
                            <div> <a class="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">IT</a></div>
                            <div> <a class="f6 link dim ba ph3 pv2 mb2 dib near-black" href="#0">ES</a></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;