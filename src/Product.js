import React, { Component } from "react";
import axios from "axios";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url:
        "https://27gmrimn45.execute-api.eu-west-2.amazonaws.com/demos/leighton-demo-api",
      responseType: "json",
      headers: { "X-Api-Key": "zQo4PPqD862IwDIQRZub8gX4dqjA3aW2DDhI6UF4" },
      params: { TableName: "products" }
    }).then(response => {
      this.setState({
        isLoaded: true,
        Items: response.data.Items
      });
    });
  }

  render() {
    let { isLoaded, Items } = this.state;

    // Creating new array with out of stock items removed

    let newArr = Items.filter(
      item =>
        item.size.small !== 0 || item.size.large !== 0 || item.size.medium !== 0
    );

    // Removing featured product from array

    let products = newArr.filter(item => item.productid !== "0m8hjmd721");

    if (!isLoaded) {
      return <div> Loading...</div>;
    } else {
      return (
        <div className="pb4">
          {products.map(Item => (
            <div className="flexContainer mt4 ba bw1 b--gray">
              <div className="flexItem1">
                <a href="https://loremflickr.com">
                  <img
                    src="https://loremflickr.com/350/420/nike,addidas"
                    alt="{ Item.name }"
                  />
                </a>
              </div>
              <div className="flexItem2">
                <div className="productHead">
                  <h3 key={Item.productid} className="productTitle f3">
                    {Item.name}
                  </h3>
                  <h3 className="productPrice f3">£65</h3>
                  <div className="productMid">
                    <h4>Brand: {Item.brand}</h4>
                    <h4>Colour: {Item.colour}</h4>
                    <h4>Product ID: {Item.productid}</h4>
                    <div className="f5 b">
                      Size:
                      {//Check stock
                      Item.size.small !== 0 ? (
                        <a
                          className="f6 link dim ph2 pv2 ml1 mb2 dib white bg-light-red"
                          href="#0"
                        >
                          S
                        </a>
                      ) : null}
                      {//Check stock
                      Item.size.medium !== 0 ? (
                        <a
                          className="f6 link dim ph2 pv2 ml2 mb2 dib white bg-light-red"
                          href="#0"
                        >
                          M
                        </a>
                      ) : null}
                      {//Check stock
                      Item.size.large !== 0 ? (
                        <a
                          className="f6 link dim ph2 pv2 ml2 mb2 dib white bg-light-red"
                          href="#0"
                        >
                          L
                        </a>
                      ) : null}
                    </div>
                    <h4>Description:</h4>
                    <p className="pr3">{Item.description}</p>
                    <div className="ProductFoot">
                      <a
                        className="f6 link dim ph3 pv2 mb4 dib white bg-light-red"
                        href="#0"
                      >
                        Add to basket
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      );
    }
  }
}

export default Product;
