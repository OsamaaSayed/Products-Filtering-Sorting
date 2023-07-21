import React from "react";
import ProductItem from "./../ProductItem/index";

const ProductsList = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </>
  );
};

export default ProductsList;
