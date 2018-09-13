import React, { Component } from 'react';
import 'tachyons';
import Nav from './Nav';
import Header from './Header';
import Cat from './Cat';
import Search from './Search';
import Featured from './Featured';

class App extends Component {
    render() {
        return (
        <div>
            <Nav />
            <Header />
            <Cat />
            <Search />
            <Featured />
        </div>
        );
    }
}

export default App;