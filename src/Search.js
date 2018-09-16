import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div className="dt w-100 mt4 mb2">
        <div className="dtc w-25 search">
          <input
            className="mb4 ml4"
            type="text"
            name="search"
            placeholder="Search.."
          />
        </div>
        <div className="dtc w-75">
          <a
            className="f6 grow no-underline br-pill ba ph3 pv2 mb2 mr4 dib dark-gray fr mt3"
            href="#0"
          >
            £ Hight to Low
          </a>
          <a
            className="f6 grow no-underline br-pill ba ph3 pv2 mb2 mr4 dib dark-gray fr mt3"
            href="#0"
          >
            £ Low to High
          </a>
        </div>
      </div>
    );
  }
}

export default Search;
