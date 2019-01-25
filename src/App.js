import React, { Component } from 'react';
// import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Component/navbar'
import ProductList from './Component/productList'
import Details from './Component/details'
import Cart from './Component/cart'
import Default from './Component/default'

class App extends Component {
  render() {
    return ( 
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        {/* <ProductList/>
        <Details/>
        <Cart/>
        <Default/> */}
      </React.Fragment>
     
    );
  }
}

export default App;
