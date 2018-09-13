import React, { Component } from 'react';
import 'tachyons';
import Nav from './Nav';
import Header from './Header'

class App extends Component {
    render() {
        return (
        <div>
            <Nav />
            <Header />
        </div>
        );
    }
}

export default App;