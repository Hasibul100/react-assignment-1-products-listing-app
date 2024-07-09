/* eslint-disable react/prop-types */
import React from "react";

const Product = (props) => {
  const {ProductsData}=props;
  const { id, rating, title, price, description, image } = ProductsData;
  return (
    <article className="product" >
      <img src={image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className="product__price"> Price: $ {price}</p>
        <p className="product__rating">Rating: {rating.rate}/5</p>
        <p className="product__desc">{description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
      {console.log(ProductsData)}
    </article>
  );
};

export default Product;
