/* eslint-disable react/prop-types */
import React from "react";
import Product from "./Product";
const Products = (props) => {
  const { data } = props;
  return (
    <div className="products">
      {data.map((itm) => (
        <Product key={itm.id} ProductsData={itm} />
      ))}
    </div>
  );
};
export default Products;
