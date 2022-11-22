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
import AllProducts from "../products"

const GetAllProducts = () => {
  const dispatch = useDispatch()
  const [allProducts, setAllProducts] = useState(AllProducts)
  // const favoritesProducts = useSelector((state) => state.favoritesProducts);
  const [shopProduct, /*setShopProduct*/] = useState("");
  
  // const [currentPage, setCurrentPage] = useState(1)
  // const [productsPerPage, /*setPerPage*/] = useState(4)
  // const indexOfLastProduct = currentPage * productsPerPage; 
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = allProducts?.slice(indexOfFirstProduct, indexOfLastProduct)

  //   const paginado = (pageNumber) => {
  //       setCurrentPage(pageNumber);
  //     };


//   useEffect(() => {
//     return ()=>{
//       fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((json) => setAllProducts(json))
//       .catch((err) => {
//         console.log(err);
//       });
//     }
//   }, []);

// const refresh = ()=> {
//   fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((json) => setAllProducts(json))
//       .catch((err) => {
//         console.log(err);
//       });
// }


// const getProductId = async (id) => {
//   await fetch(`https://fakestoreapi.com/products/${id}`)
//      .then((res) => res.json())
//      .then((json) => {
//        setAllProducts([json]);
//      })
//      .catch((err) => {
//        console.log(err);
//      });
//  };


  return (
    <div>
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
            <div key={product.id} className="cards">
              {/* <Link to= {`/detail/${product.id}`}> */}
                {/* <a onClick={() => getProductId(product.id)}> */}
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
                  <Categories
                   category={product.category}
                   />
                <SingleProduct id={product.id}
                title= {product.title}
                description={product.description}
                category={product.category}
                image={product.image}
                price={product.price}></SingleProduct>
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
