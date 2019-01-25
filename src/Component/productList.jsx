import React, { Component } from 'react'
import Product from './product'
import {storeProducts} from "../data.js"
import styled from "styled-components"
import {} from "../context"
import Title from './title'
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
         <productWrapper className="py-5">
         <div className="container">
         <Title name="our" title="Products"/> 
         <div className="row">
           <ProductConsumer>
              {value =>{
              
              return value.products.map(product => {
                return <Product key={product.id} product={product}/>
               })

              }}
              </ProductConsumer>

         
         </div> 
         </div>
          </productWrapper>
      </React.Fragment>
    )
  }
}
