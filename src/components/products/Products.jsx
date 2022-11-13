import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import Carrito from "../carrito/Carrito"
// import {getFavsProducts} from "../../actions/actions"
import SingleProduct from "../singleProduct/SingleProduct"
import Paginations from "../paginacion/Paginacion"
import Detail from "../detail/Detail"
import Categories from "../categories/Categories.jsx"

const GetAllProducts = () => {
  const dispatch = useDispatch()
  const [allProducts, setAllProducts] = useState("");
  // const favoritesProducts = useSelector((state) => state.favoritesProducts);
  const [shopProduct, /*setShopProduct*/] = useState("");
  
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, /*setPerPage*/] = useState(4)
  const indexOfLastProduct = currentPage * productsPerPage; 
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts?.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
      };


  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then((json) => setAllProducts(json))
      .catch((err) => {
        console.log(err);
      });
  }, []);

const refresh = ()=> {
  fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json))
      .catch((err) => {
        console.log(err);
      });
}


const getProductId = async (id) => {
  await fetch(`https://fakestoreapi.com/products/${id}`)
     .then((res) => res.json())
     .then((json) => {
       setAllProducts([json]);
     })
     .catch((err) => {
       console.log(err);
     });
 };


  return (
    <div>
      {/* <Carrito
      image={allProducts.image}
      price={allProducts.price}
      title={allProducts.title}
      description={allProducts.description}
      /> */}
        <button className="products-card" onClick={() =>refresh()}>refresh</button>
      <Paginations 
        productsPerPage={productsPerPage}
        allProducts={allProducts.length}
        paginado={paginado}
        />
      {/* {shopProduct && shopProduct?.map((f, index) => {
                    return (
                      <div key={index}>
                        <SingleProduct
                          id={f.id}
                          image={f.image}
                          price={f.price}
                          category={f.category}
                          description={f.description}
                        />
                      </div>
                    );
                })} */}
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
          currentProducts?.map((product) => {
            return (
            <div key={product.id}>
              {/* <Link to= {`/detail/${product.id}`}> */}
                <a onClick={() => getProductId(product.id)}>
                  
                <Detail
                id={product.id}
                title= {product.title}
                description={product.description}
                category={product.category}
                image={product.image}
                price={product.price}
                rating ={product.rating.rate}
                >
                </Detail>
                  </a>
                  <Categories
                   category={product.category}
                   >
                  </Categories>
                {/* <SingleProduct id={product.id}
                title= {product.title}
                description={product.description}
                category={product.category}
                image={product.image}
                price={product.price}></SingleProduct> */}
                {/* </Link> */}
            </div>
            );
          })
        )}
      </section>
    </div>
  );
};

export default GetAllProducts;
