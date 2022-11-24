import React, { useReducer } from "react";
// import shoppingReducer from "../redux/redux";
import ProductItem from "./ProductItem";
import {shoppingInitialState} from "../redux/redux.js"

const ShopingCart = () => {
  const [state, dispatch] = useReducer(
  
     shoppingInitialState);
  const {products, cart} = state;

  const addToCart = (id) => {
    console.log(id)
  };
  const delFromCart = () => {};
  const clearCart = () => {};

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
