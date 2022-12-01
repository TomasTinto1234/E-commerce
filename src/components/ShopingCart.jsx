import React, {  } from "react";
import ProductItem from "./ProductItem";

const ShopingCart = (props) => {
 
  const {products} = props;

  const addToCart = (id) => {
    console.log(id)
  };
  // const delFromCart = () => {};
  // const clearCart = () => {};

  return (
    <div>
      <h2>carrito de compras</h2> 
      <h3>PRODUCTOS</h3>
      <article className="box">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>carrito</h3>
      <article className="box"></article>
    </div>
  );
};

export default ShopingCart;
