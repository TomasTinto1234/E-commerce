import React from "react";
import { useEffect, useState } from "react";
import {getFavsProducts} from "../../actions/actions"
import { useDispatch, useSelector } from "react-redux";



const Detail = (id) => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [allProducts, setAllProducts] = useState("");
    const [shopProduct, setShopProduct] = useState("");

//   const getProductId = async (id) => {
//    await fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => res.json())
//       .then((json) => {
//         setAllProducts([json]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   const handleClickFav = async (id) => {
//     dispatch(setShopProduct(id))
//       dispatch(getFavsProducts(id));
//     }

  return (
      <div key={id} id="container" className="products-card">
      <div >
      <h1>{id.title}</h1>
      <p >{id.description}</p>
          </div>
          <div >
          <img src={id.image} height="250" width="250" />
          <div >
          <h2>category: {id.category}</h2>
          </div>
          </div>
          </div>
        
          );
        }
        
export default Detail;
