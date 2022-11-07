import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";
// import { useDispatch, useSelector } from "react-redux";

const GetAllProducts = () => {
  // const dispatch = useDispatch()
  const [allProducts, setAllProducts] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getProductId =  (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setAllProducts([json]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleClic(e) {
    setAllProducts(e)
}



  return (
    <div>
      <button onClick={e=>{handleClic(e)}}>refresh</button>
      <section id="products">
        {allProducts.length === 0 ? (
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
        ) : (
          allProducts?.map((product) => {
            return (
              <div key={product.id} id="container" className="products-card">
                <div className="product-details">
                  <h1>{product.title}</h1>
                  <p class="information">description: {product.description}</p>
                  <div class="control">
                    <button
                      class="btn"
                      onClick={() => getProductId(product.id)}
                    >
                      <span>Shop now</span>
                    </button>
                  </div>
                </div>
                <div class="product-image">
                  <img src={product.image} height="250" width="250" />
                  <div class="info">
                    <h2>category: {product.category}</h2>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
};

export default GetAllProducts;
