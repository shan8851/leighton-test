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
        Items: response.data
      });
    });
  }

  render() {
    let { isLoaded, Items } = this.state;
    console.log(Items);

    if (!isLoaded) {
      return <div> Loading...</div>;
    } else {
      return (
        <div className="pb4">
          <div className="flexContainer">
            <div className="flexItem1">
              <a href="https://placeholder.com">
                <img src="https://via.placeholder.com/250x350" alt="" />
              </a>
            </div>
            <div className="flexItem2">
              <div className="productHead">
                {Items.map(Item => (
                  <h1 key={Item.productid} className="productTitle">
                    Title: {Item.name}
                  </h1>
                ))}
                <h1 className="productPrice">£65</h1>
                <div className="productMid">
                  <h4>Brand: Brand</h4>
                  <h4>Colour: Red</h4>
                  <div className="f5 b">
                    Size:
                    <a
                      className="f6 link dim ph3 pv2 ml3 mb2 dib white bg-light-red"
                      href="#0"
                    >
                      S
                    </a>
                    <a
                      className="f6 link dim ph3 pv2 ml2 mb2 dib white bg-light-red"
                      href="#0"
                    >
                      M
                    </a>
                    <a
                      className="f6 link dim ph3 pv2 ml2 mb2 dib white bg-light-red"
                      href="#0"
                    >
                      L
                    </a>
                  </div>
                  <h5>Description:</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nunc sed velit dignissim sodales ut eu. Vitae purus
                    faucibus ornare suspendisse sed nisi. Vel eros donec ac odio
                    tempor. Ultrices neque ornare aenean euismod elementum nisi
                    quis eleifend. Tellus integer feugiat scelerisque varius.{" "}
                  </p>
                  <div className="ProductFoot">
                    <a
                      className="f6 link dim ph3 pv2 mb2 dib white bg-light-red"
                      href="#0"
                    >
                      Add to basket
                    </a>
                    <a
                      className="f6 link dim ba ph3 pv2 mb2 ml4 dib black"
                      href="#0"
                    >
                      Save for later
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Product;
