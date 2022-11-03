import React from "react";
import { useEffect, useState } from "react";
import "./products.css"

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
    <section id="products">

   {allProducts.length === 0 ?(
     <div className="spinner">
     <span>L</span>
     <span>O</span>
     <span>A</span>
     <span>D</span>
     <span>I</span>
     <span>N</span>
     <span>G</span>
     <span>.</span>
     <span>.</span>
     <span>.</span>
   </div>
   ):(
     allProducts && allProducts.map((product)=> {
       return (
         <div key={product.id}>
            <h2>title: {product.title}</h2>
            <h2>Price: {product.price}$</h2>
            <p>description: {product.description}</p>
            <h2>category: {product.category}</h2>
            <img src={product.image} height="250" width="250"/> 
        </div>
      )
      
   }))}

        </section>
  </div>)
}

export default GetAllProducts;
