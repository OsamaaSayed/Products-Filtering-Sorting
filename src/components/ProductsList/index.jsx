import React from "react";
import ProductItem from "./../ProductItem/index";

const ProductsList = ({ products, filteredProducts }) => {
  return (
    <>
      {filteredProducts.length
        ? filteredProducts.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))
        : products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
    </>
  );
};

export default ProductsList;
