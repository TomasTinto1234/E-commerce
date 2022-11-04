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
  <div >
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
        <div key={product.id} id="container" className="products-card">	
         <div className="product-details">
            <h1>{product.title}</h1>
            <p class="information">description: {product.description}</p>
            <div  class="control">
            <button class="btn">
            <span class="price">{product.price}$</span>
            <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
            <span class="buy">Get now</span>
            </button>
            </div>
            
        </div>
        <div class="product-image">
          <img src={product.image} height="250" width="250"/> 
        <div class="info">
            <h2>category: {product.category}</h2>
        </div>
        </div>
        </div>
      )
      
   }))}

        </section>
  </div>)
}

export default GetAllProducts;
