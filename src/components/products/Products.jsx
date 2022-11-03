import React from "react";
import { useEffect, useState } from "react";

const GetAllProducts = () => {
    
  const [allProducts, setAllProducts] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => 
      setAllProducts(json)
      )
      .catch((err) => {
        console.log(err);
      });
  });

  return (
  <div>
   {allProducts && allProducts.map((product)=> {
      return (
        <div key={product.id}>
            <h2>title: {product.title}</h2>
            <h2>Price: {product.price}$</h2>
            <p>description: {product.description}</p>
            <h2>category: {product.category}</h2>
            <img src={product.image} height="250" width="250"/> 
        </div>
      )
   })}

  </div>)
}

export default GetAllProducts;
