import React, { Component } from 'react';
import './Featured.css';
import 'tachyons';

class Product extends Component {
    render() {
        return (
            <div className="pb4">
                    <div className="flexContainer">
                        <div className="flexItem1">
                            <a href="https://placeholder.com"><img src="https://via.placeholder.com/250x350"/></a>
                        </div>
                    <div className="flexItem2">
                        <div className="productHead">
                            <h1 className="productTitle">TITLE</h1>
                            <h1 className="productPrice">£65</h1>
                        <div className="productMid">
                            <h4>Brand: Brand</h4>
                            <h4>Colour: Red</h4>
                            <h5>Description:</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales ut eu. Vitae purus faucibus ornare suspendisse sed nisi. Vel eros donec ac odio tempor. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Tellus integer feugiat scelerisque varius. </p>
                        <div className="ProductFoot">
                            <a class="f6 link dim ph3 pv2 mb2 dib white bg-light-red" href="#0">Add to basket</a>
                            <a class="f6 link dim ba ph3 pv2 mb2 ml4 dib black" href="#0">Save for later</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default Product;