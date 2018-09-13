import React, { Component } from 'react';
import 'tachyons';
import Nav from './Nav';
import Header from './Header';
import Cat from './Cat';
import Search from './Search';

class App extends Component {
    render() {
        return (
        <div>
            <Nav />
            <Header />
            <Cat />
            <Search />
        </div>
        );
    }
}

export default App;