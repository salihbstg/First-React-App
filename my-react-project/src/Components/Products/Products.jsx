import React from 'react';
import {Data} from "./ProdutcsData";
import Product from './Product';
export default function Products() {
    console.log(Data);
  return (
    <>
      {Data.map(product=>{
        return(
            <Product url={product.url} title={product.title} info={product.info}/>
        );
      })}
    </>
  )
}
