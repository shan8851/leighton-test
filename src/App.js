import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Cat from './Cat';
import Search from './Search';
import Featured from './Featured';
import Product from './Product';
import Pagination from './Pagination';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
        <div>
            <Nav />
            <Header />
            <Cat />
            <Search />
            <Featured />
            <Product />
            <Product />
            <Product />
            <Product />
            <Pagination />
            <Footer />
        </div>
        );
    }
}

export default App;