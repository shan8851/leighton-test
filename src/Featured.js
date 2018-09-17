import React, { Component } from "react";
import "./Featured.css";
import axios from "axios";

class Featured extends Component {
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

    // Grabbing featured product from API data

    let featured = Items.filter(item => item.productid === "0m8hjmd721");

    if (!isLoaded) {
      return <div> </div>;
    } else {
      return (
        <div className="">
          <div className="bg-gray white w-80 pa2 mt4 center b">
            Featured Product
          </div>
          {featured.map(Item => (
            <div className="flexContainer ba bw2 b--gray">
              <div className="flexItem1">
                <a href="https://loremflickr.com.com">
                  <img
                    src="https://loremflickr.com/280/420/jeans,shorts"
                    alt="{ Item.name }"
                  />
                </a>
              </div>
              <div className="flexItem2">
                <div className="productHead">
                  <h3 key={Item.productid} className="productTitle f3">
                    {Item.name}
                  </h3>
                  <h3 className="productPrice f2">£99</h3>
                  <div className="productMid">
                    <h4>Brand: {Item.brand}</h4>
                    <h4>Colour: {Item.colour}</h4>
                    <h4>Product ID: {Item.productid}</h4>
                    <div className="f5 b">
                      Size:
                      {//Check stock
                      Item.size.small !== 0 ? (
                        <a
                          className="f6 link dim ph3 pv2 ml3 mb2 dib white bg-light-red"
                          href="#0"
                        >
                          S
                        </a>
                      ) : null}
                      {//Check stock
                      Item.size.medium !== 0 ? (
                        <a
                          className="f6 link dim ph3 pv2 ml3 mb2 dib white bg-light-red"
                          href="#0"
                        >
                          M
                        </a>
                      ) : null}
                      {//Check stock
                      Item.size.large !== 0 ? (
                        <a
                          className="f6 link dim ph3 pv2 ml3 mb2 dib white bg-light-red"
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

export default Featured;
