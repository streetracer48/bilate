import React, { Component } from 'react'
import Product from './product'
import Title from './title'

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
         <productWrapper className="py-5">
         <div className="container">
         <Title name="our" title="Products"/>  
         </div>
          </productWrapper>
      </React.Fragment>
    )
  }
}
