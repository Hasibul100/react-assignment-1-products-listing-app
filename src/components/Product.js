/* eslint-disable react/prop-types */
import React from 'react';

const Product = (props) => {
  const {id ,rating,title,price,desc,img} = props;
  return (
      <article className="product" key={id}>
      <img src={img} alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p>Price: $ {price}</p>
        <p>Rating: {rating}/5</p>
        <p className="product__desc">{desc}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
