import React from "react";
import { useEffect, useState } from "react";
import {getFavsProducts} from "../../actions/actions"
import { useDispatch, useSelector } from "react-redux";



const SingleProduct = ({title, description, category, image, id}) => {
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
  const handleClickFav = async (id) => {
    dispatch(setShopProduct(id))
      dispatch(getFavsProducts(id));
    }

  return (
      <div key={id} id="container" className="products-card">
      <div className="product-details">
      <h1>{title}</h1>
      <p class="information">description: {description}</p>
      <div class="control">
        <button
          class="btn"
          onClick={() => getProductId(id)}
        >
          <span>details</span>
        </button>
        <button
          class="btn"
          onClick={()=>handleClickFav(id)}
        >
          <span>Shop now</span>
          </button>
          </div>
          </div>
          <div class="product-image">
          <img src={image} height="250" width="250" />
          <div class="info">
          <h2>category: {category}</h2>
          </div>
          </div>
          </div>
        
          );
        }
        
export default SingleProduct;
