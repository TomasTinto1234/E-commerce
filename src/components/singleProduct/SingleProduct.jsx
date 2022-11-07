import React from "react";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const [product, setProduct] = useState("");

  useEffect((id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((err) => {
        console.log(err);
      });
  },[]);


  
  return (
    <div>
      {product &&
        product.map((product) => {
          return (
            <div>
              <h2>producto: {product}</h2>
              {/* <h2>precio: {product.price}</h2> */}
              <h2></h2>
              <h2></h2>
              <img />
            </div>
          );
        })}
    </div>
  );
}

export default SingleProduct;
