import React, { Component } from 'react';
import './Search.css';


class Search extends Component {
    render() {
        return (
            <div className="search">
            <input type="text" name="search" placeholder="Search.."/>
         </div>
        );
    }
}

export default Search;