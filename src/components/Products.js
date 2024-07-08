/* eslint-disable react/prop-types */
import React from "react";
 import Product from "./Product";
const  Products = (props)=>{
    const {data}= props;
    return(
        <div className="products">
       { data.map((itm,ind)=><Product rating={itm.rating.rate} key={ind} price={itm.price} img={itm.image}  title={itm.title} desc={itm.description} />)}
       
     
        </div>
    )
}
export default Products;